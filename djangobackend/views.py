from django.http import JsonResponse
from django.shortcuts import render
from pymongo import MongoClient
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
import json
from openai import OpenAI
from pymongo.errors import ConnectionFailure

def index(request):
    return render(request, 'index.html')


from django.http import JsonResponse
from pymongo import MongoClient
from bson import ObjectId

def get_market_data(request):
    try:
        # Connect to MongoDB
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")

        # Access the portfolio database
        db = client.portfolio

        # Access the market_data collection
        market_data_collection = db.global_data

        # Query for the document using its ObjectId
        market_data_document = market_data_collection.find_one({'_id': ObjectId("660685ed6bc8020d1c75d185")})

        if not market_data_document:
            return JsonResponse({'error': 'Document not found'}, status=404)

        # Extract required values
        years_on_market = market_data_document.get('Years on the market', None)
        experts_on_board = market_data_document.get('Experts on board', None)
        completed_projects = market_data_document.get('Completed projects', None)
        time_to_hire = market_data_document.get('Time to hire', None)

        # Close MongoDB connection
        client.close()

        # Prepare response data
        data = {
            'Years on the market': years_on_market,
            'Experts on board': experts_on_board,
            'Completed projects': completed_projects,
            'Time to hire': time_to_hire
        }

        return JsonResponse(data)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)





  

def get_crew_data(request):
    try:
        # Connect to MongoDB
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")

        # Access the portfolio database
        db = client.portfolio

        # Access the crew_data collection
        crew_data_collection = db.crew_data

        # Query for all documents in the crew_data collection
        crew_data_documents = crew_data_collection.find({}, {'_id': 0, 'image_url': 1, 'image_text': 1, 'link': 1})

        # Convert MongoDB documents to a list of dictionaries
        crew_data_list = list(crew_data_documents)

        # Close MongoDB connection
        client.close()

        # Return crew data as JSON response
        return JsonResponse(crew_data_list, safe=False)
    except Exception as e:
        # Handle exceptions appropriately
        return JsonResponse({'error': str(e)})

    # views.

def get_job_data(request):
    # Connect to MongoDB
    client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
    db = client['portfolio']
    collection = db['global_data']

    # Convert the provided ID to ObjectId
    document_id = ObjectId("661aea4fb3059fc714db1f13")

    # Retrieve the specific job data from MongoDB
    job_data = collection.find_one({'_id': document_id})

    if job_data:
        # Convert MongoDB ObjectId to string for JSON serialization
        job_data['_id'] = str(job_data['_id'])

    # Close MongoDB connection
    client.close()

    return JsonResponse(job_data)



    





def ebook_data(request):
    # Connect to MongoDB
    client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
    db = client['portfolio']
    collection = db['global_data']

    # Retrieve specific job data from MongoDB
    document_id = "661aea4fb3059fc714db1f14"
    ebook_data = collection.find_one({"_id": ObjectId(document_id)})

    if ebook_data:
        # Convert MongoDB ObjectId to string for JSON serialization
        ebook_data['_id'] = str(ebook_data['_id'])
        response = JsonResponse(ebook_data)
    else:
        response = JsonResponse({"error": "Document not found"}, status=404)

    # Close MongoDB connection
    client.close()

    return response




def get_reward_data(request):
    try:
        # Connect to MongoDB
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")

        # Access the portfolio database
        db = client.portfolio

        # Access the reward collection
        reward_collection = db.reward

        # Query for all documents in the reward collection
        reward_documents = reward_collection.find({}, {'_id': 0})

        # Convert MongoDB documents to a list of dictionaries
        reward_data = list(reward_documents)

        # Close MongoDB connection
        client.close()

        # Return reward data as JSON response
        return JsonResponse(reward_data, safe=False)
    except Exception as e:
        # Handle exceptions appropriately
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
def save_contact(request):
    if request.method == 'POST':
        try:
            # Parse JSON data from request body
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            # Connect to MongoDB
            client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
            db = client['portfolio']
            contact_collection = db['contact']

            # Save contact data to MongoDB
            contact_collection.insert_one({
                'name': name,
                'email': email,
                'message': message
            })

            # Close MongoDB connection
            client.close()

            # Return success response
            return JsonResponse({'message': 'Contact form submitted successfully!'})
        except Exception as e:
            # Return error response if any exception occurs
            return JsonResponse({'error': str(e)}, status=500)
    else:
        # Return error response for disallowed methods
        return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def chat(request):
    client = OpenAI(api_key=settings.OPENAI_API_KEY)
    messages = []

    if request.method == 'POST':
        data = request.POST.get('user_message') or request.body.decode('utf-8')
        user_message = data.strip()

        if user_message:
            response = client.chat.completions.create(
                model="ft:gpt-3.5-turbo-0125:personal::96ufzwZZ",
                messages=[
                    {"role": "system", "content": "System Heuristics is a tech consultancy firm that offers expert guidance and innovative strategies tailored to optimize performance and drive digital transformation"},
                    {"role": "user", "content": user_message}
                ],
                temperature=0,
            )

            messages.append({"role": "user", "content": user_message})
            messages.append({"role": "system", "content": response.choices[0].message.content})
        else:
            messages.append({"role": "system", "content": "Please provide a valid message"})

        return JsonResponse({'messages': messages})

    return JsonResponse({'messages': []})
    





def learnmore(request):
    try:
        service_name = request.GET.get('service_name', None)
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
        db = client['portfolio']
        learn_more_collection = db['learn_more_Data']  # Updated collection name
        
        # Fetch data from MongoDB with category "Generative AI"
        data = learn_more_collection.find_one({"category": service_name})
        
        if data is None:
            return JsonResponse({'error': 'No data found in MongoDB'}, status=404)
        
        # Convert MongoDB ObjectId to string
        data['_id'] = str(data['_id'])
        
        return JsonResponse(data)
    except ConnectionFailure as e:
        return JsonResponse({'error': str(e)}, status=500)






def global_project(request):
    try:
        # Connect to MongoDB
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
        db = client['portfolio']
        global_project_collection = db['global_project']
        project_category_collection = db['project_category']
        project_collection = db['project_collection']
        
        # Fetch document with the name "Tag" from global_project_collection
        document = global_project_collection.find_one({"name": "Tag"})
        
        if document is None:
            return JsonResponse({'error': 'Document with name "Tag" not found in MongoDB'}, status=404)
        
        # Extract options field from the document
        options = document.get('options', [])
        
        # If "option" parameter is provided in the request
        selected_option = request.GET.get('option')
        if selected_option:
            if selected_option == "All":
                # Query project_collection for all documents
                all_documents = project_collection.find({})
                # Collect all relevant fields from the documents
                all_documents_list = [
                    {
                        "_id": str(doc["_id"]),
                        "name": doc.get('name'),
                        "description": doc.get('description'),
                        "video_url": doc.get('video_url'),
                        "category": doc.get('category')
                    } for doc in all_documents
                ]
                return JsonResponse({'documents': all_documents_list})
            else:
                # Query project_category collection for names corresponding to the selected option
                category_documents = project_category_collection.find({"tag": selected_option})
                names = [doc['name'] for doc in category_documents]
                return JsonResponse({'names': names})
        
        # If "category" parameter is provided in the request
        selected_category = request.GET.get('category')
        if selected_category:
            # Define the aggregation pipeline
            pipeline = [
                {"$match": {"category": selected_category}},
                {"$project": {"_id": {"$toString": "$_id"}, "name": 1, "description": 1, "video_url": 1, "category": 1}}
            ]
            # Execute the aggregation pipeline
            documents = list(project_collection.aggregate(pipeline))
            return JsonResponse({'documents': documents})
        
        return JsonResponse({'options': options})
    
    except ConnectionFailure as e:
        return JsonResponse({'error': str(e)}, status=500)




def project_detail(request):
    try:
        # Connect to MongoDB
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
        db = client['portfolio']
        project_collection = db['project_collection']
        
        # If "category" and "name" parameters are provided in the request
        selected_category = request.GET.get('category')
        selected_name = request.GET.get('name')
        if selected_category and selected_name:
            # Define the aggregation pipeline to match the document and include necessary fields
            pipeline = [
                {"$match": {"category": selected_category, "name": selected_name}},
                {"$project": {
                    "_id": {"$toString": "$_id"},
                    "video_url": 1,
                    "video_heading2": 1,
                    "video_text2": 1,
                    "about_heading": 1,
                    "about_text": 1,
                    "about_heading2": 1,
                    "about_text2": 1,
                    "about_text3": 1,
                    "about_heading3": 1,
                    "about_text4": 1,
                    "about_heading4": 1,
                    "about_text5": 1,
                    "image_text": 1,
                    "image_url": 1,
                    "image_url1": 1,
                    "image_url2": 1,
                    "image_url3": 1,
                    "image_url4": 1
                }}
            ]
            
            # Execute the aggregation pipeline
            document = project_collection.aggregate(pipeline)
            document = list(document)  # Convert cursor to list
            
            if document:
                return JsonResponse({'document': document[0]})  # Return the first document (assuming there's only one match)
            else:
                return JsonResponse({'error': 'Document not found'}, status=404)
        
        return JsonResponse({'error': 'Category or name parameter is missing from the request'}, status=400)
    
    except ConnectionFailure as e:
        return JsonResponse({'error': str(e)}, status=500)




def blog_page(request):
    try:
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
        db = client['portfolio']
        global_blog_collection = db['global_blog']
        blog_data_collection = db['blog_data']
        
        document = global_blog_collection.find_one({"name": "Tag"})
        
        if document is None:
            return JsonResponse({'error': 'Document with name "Tag" not found in MongoDB'}, status=404)
        
        options = document.get('options', [])
        
        selected_tag = request.GET.get('tag')
        if selected_tag:
            if selected_tag == "All Categories":
                all_documents = blog_data_collection.find({})
                all_documents_list = [
                    {
                        "_id": str(doc["_id"]),
                        "name": doc.get('name'),
                        "description": doc.get('description'),
                        "image_url": doc.get('image_url'),
                        "tag": doc.get('tag')
                    } for doc in all_documents
                ]
                return JsonResponse({'documents': all_documents_list})
            else:
                tag_documents = blog_data_collection.find({"tag": selected_tag})
                tag_documents_list = [
                    {
                        "_id": str(doc["_id"]),
                        "name": doc.get('name'),
                        "description": doc.get('description'),
                        "image_url": doc.get('image_url'),
                        "tag": doc.get('tag')
                    } for doc in tag_documents
                ]
                return JsonResponse({'documents': tag_documents_list})
        
        return JsonResponse({'options': options})
    
    except ConnectionFailure as e:
        return JsonResponse({'error': str(e)}, status=500)




def blog_data(request):
    name = request.GET.get('name')  # Retrieve the 'name' parameter from the request

    try:
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
        db = client['portfolio']
        blog_data_collection = db['blog_data']
        
        # Define the fields to include in the response
        projection = {
            "about_heading": 1,
            "about_text": 1,
            "blog_heading": 1,
            "blog_heading2": 1,
            "blog_text": 1,
            "blog_text2": 1,
            "title_date": 1,
            "title_heading": 1,
            "title_time": 1,
            "title_image": 1,
            "blog_image": 1,
            "blog_image2": 1
        }

        # Filter documents based on the 'name' parameter
        if name:
            filter_query = {'name': name}
        else:
            filter_query = {}

        all_documents = blog_data_collection.find(filter_query, projection)
        all_documents_list = [
            {
                "about_heading": doc.get('about_heading'),
                "about_text": doc.get('about_text'),
                "blog_heading": doc.get('blog_heading'),
                "blog_heading2": doc.get('blog_heading2'),
                "blog_text": doc.get('blog_text'),
                "blog_text2": doc.get('blog_text2'),
                "title_date": doc.get('title_date'),
                "title_heading": doc.get('title_heading'),
                "title_time": doc.get('title_time'),
                "title_image": doc.get('title_image'),
                "blog_image": doc.get('blog_image'),
                "blog_image2": doc.get('blog_image2')
            } for doc in all_documents
        ]
        return JsonResponse({'documents': all_documents_list})
    
    except ConnectionFailure as e:
        return JsonResponse({'error': str(e)}, status=500)
