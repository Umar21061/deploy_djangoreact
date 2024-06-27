from django.http import JsonResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
import json
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure
from bson import ObjectId
from openai import OpenAI

# MongoDB connection URL
MONGO_URL = settings.MONGO_URL

client = OpenAI(api_key=settings.OPENAI_API_KEY)

# Helper function to get MongoDB client
def get_mongo_client():
    return MongoClient(MONGO_URL)

def get_couting_number(request):
    try:
        client = get_mongo_client()
        db = client.portfolio
        market_data_collection = db.global_data
        market_data_document = market_data_collection.find_one({'_id': ObjectId("660685ed6bc8020d1c75d185")})

        if not market_data_document:
            return JsonResponse({'error': 'Document not found'}, status=404)

        data = {
            'Years on the market': market_data_document.get('Years on the market', None),
            'Experts on board': market_data_document.get('Experts on board', None),
            'Completed projects': market_data_document.get('Completed projects', None),
            'Time to hire': market_data_document.get('Time to hire', None)
        }

        return JsonResponse(data)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def get_job_data(request):
    try:
        client = get_mongo_client()
        db = client.portfolio
        collection = db.global_data
        document_id = ObjectId("661aea4fb3059fc714db1f13")
        job_data = collection.find_one({'_id': document_id})

        if job_data:
            job_data['_id'] = str(job_data['_id'])

        client.close()
        return JsonResponse(job_data)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
def save_contact(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            client = get_mongo_client()
            db = client.portfolio
            contact_collection = db.contact

            contact_collection.insert_one({
                'name': name,
                'email': email,
                'message': message
            })

            client.close()
            return JsonResponse({'message': 'Contact form submitted successfully!'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
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
                    {"role": "system", "content": "System Heuristics is a tech consultancy firm that offers expert guidance and innovative strategies tailored to optimize performance and drive digital transformation."},
                    {"role": "user", "content": user_message}
                ],
                temperature=0,
            )

            messages.append({"role": "user", "content": user_message})
            messages.append({"role": "system", "content": response.choices[0].message.content})
        else:
            messages.append({"role": "system", "content": "Please provide a valid message."})

        return JsonResponse({'messages': messages})

    return JsonResponse({'messages': []})

def learnmore(request):
    try:
        service_name = request.GET.get('service_name', None)
        client = get_mongo_client()
        db = client.portfolio
        learn_more_collection = db.learn_more_Data
        
        data = learn_more_collection.find_one({"category": service_name})
        
        if data is None:
            return JsonResponse({'error': 'No data found in MongoDB'}, status=404)
        
        data['_id'] = str(data['_id'])
        
        return JsonResponse(data)
    except ConnectionFailure as e:
        return JsonResponse({'error': str(e)}, status=500)

def global_project(request):
    try:
        client = get_mongo_client()
        db = client.portfolio
        global_project_collection = db.global_project
        project_category_collection = db.project_category
        project_collection = db.project_collection
        
        document = global_project_collection.find_one({"name": "Tag"})
        
        if document is None:
            return JsonResponse({'error': 'Document with name "Tag" not found in MongoDB'}, status=404)
        
        options = document.get('options', [])
        
        selected_option = request.GET.get('option')
        if selected_option:
            if selected_option == "All":
                all_documents = project_collection.find({})
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
                category_documents = project_category_collection.find({"tag": selected_option})
                names = [doc['name'] for doc in category_documents]
                return JsonResponse({'names': names})
        
        selected_category = request.GET.get('category')
        if selected_category:
            pipeline = [
                {"$match": {"category": selected_category}},
                {"$project": {"_id": {"$toString": "$_id"}, "name": 1, "description": 1, "video_url": 1, "category": 1}}
            ]
            documents = list(project_collection.aggregate(pipeline))
            return JsonResponse({'documents': documents})
        
        return JsonResponse({'options': options})
    
    except ConnectionFailure as e:
        return JsonResponse({'error': str(e)}, status=500)

def project_detail(request):
    try:
        client = get_mongo_client()
        db = client.portfolio
        project_collection = db.project_collection
        
        selected_category = request.GET.get('category')
        selected_name = request.GET.get('name')
        if selected_category and selected_name:
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
            
            document = project_collection.aggregate(pipeline)
            document = list(document)
            
            if document:
                return JsonResponse({'document': document[0]})
            else:
                return JsonResponse({'error': 'Document not found'}, status=404)
        
        return JsonResponse({'error': 'Category or name parameter is missing from the request'}, status=400)
    
    except ConnectionFailure as e:
        return JsonResponse({'error': str(e)}, status=500)

def blog_page(request):
    try:
        client = get_mongo_client()
        db = client.portfolio
        global_blog_collection = db.global_blog
        blog_data_collection = db.blog_data
        
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
    name = request.GET.get('name')

    try:
        client = get_mongo_client()
        db = client.portfolio
        blog_data_collection = db.blog_data
        
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

def get_industry_data(request):
    try:
        client = get_mongo_client()
        db = client.portfolio
        industry_collection = db.industry
        
        pipeline = [
            {'$project': {
                '_id': 0,
                'name': 1,
                'description': 1,
                'image': 1,
            }}
        ]
        
        industry_documents = industry_collection.aggregate(pipeline)
        industry_list = list(industry_documents)
        client.close()
        
        return JsonResponse(industry_list, safe=False)
    
    except Exception as e:
        return JsonResponse({'error': str(e)})

def get_industry_details(request):
    try:
        client = get_mongo_client()
        db = client.portfolio
        industry_collection = db.industry
        
        pipeline = [
            {'$project': {
                '_id': 0,
                'name': 1,
                'heading1': 1,
                'text1': 1,
                'button': 1,
                'image1': 1,
                'heading2': 1,
                'title1': 1,
                'logo1': 1,
                'title_description1': 1,
                'title2': 1,
                'logo2': 1,
                'title_description2': 1,
                'title3': 1,
                'logo3': 1,
                'title_description3': 1,
                'title4': 1,
                'logo4': 1,
                'title_description4': 1,
                'title5': 1,
                'logo5': 1,
                'title_description5': 1,
                'title6': 1,
                'logo6': 1,
                'title_description6': 1,
            }}
        ]
        
        industry_documents = industry_collection.aggregate(pipeline)
        industry_list = list(industry_documents)
        client.close()
        
        return JsonResponse(industry_list, safe=False)
    
    except Exception as e:
        return JsonResponse({'error': str(e)})
