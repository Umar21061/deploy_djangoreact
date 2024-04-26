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


def get_market_data(request):
    try:
        # Connect to MongoDB
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")

        # Access the portfolio database
        db = client.portfolio

        # Access the market_data collection
        market_data_collection = db.market_data

        # Query for the document containing market data
        market_data_document = market_data_collection.find_one()

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
            'Time to hire' : time_to_hire
        }

        return JsonResponse(data)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)





def get_portfolio_data(request):
    # Connect to MongoDB
    client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")

    # Access the portfolio database
    db = client.portfolio

    # Access the market_data collection
    market_data_collection = db.market_data

    # Fetch the document containing market data
    market_data_document = market_data_collection.find_one()

    # Initialize lists to store expertise and industry video data
    expertise_video_data = []
    industry_video_data = []

    if market_data_document:
        # Iterate over expertise categories
        for expertise_category, subcategories in market_data_document.get('expertise', {}).items():
            for subcategory in subcategories:
                url = subcategory  # Assuming each subcategory directly holds the URL
                category_name = f"{expertise_category} "
                expertise_video_data.append({'category_name': category_name, 'url': url})

        # Iterate over industry categories
        for industry_category, subcategories in market_data_document.get('industry', {}).items():
            for subcategory in subcategories:
                url = subcategory  # Assuming each subcategory directly holds the URL
                category_name = f"{industry_category} "
                industry_video_data.append({'category_name': category_name, 'url': url})

    # Combine expertise and industry video data
    video_data = {'expertise': expertise_video_data, 'industry': industry_video_data}

    # Return data as JSON response
    return JsonResponse(video_data)

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



from django.http import JsonResponse
from pymongo import MongoClient

def get_portfolio_data(request):
    try:
        # Connect to MongoDB
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")

        # Access the portfolio database
        db = client.portfolio

        # Access the project2 collection
        collection = db.project2

        # Fetch data from MongoDB
        data = collection.find({}, {'_id': 0, 'category': 1, 'urls': 1, 'video_text': 1})

        # Convert MongoDB cursor to list of dictionaries
        portfolio_data = list(data)

        # Close MongoDB connection
        client.close()

        return JsonResponse(portfolio_data, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)



    try:
        # Connect to MongoDB
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")

        # Access the portfolio database
        db = client.portfolio

        # Access the project collection
        collection = db.project

        # Fetch data from MongoDB
        data = collection.find({}, {'_id': 0, 'portfolioproject_url.expertise': 1, 'portfolioproject_url.industry': 1})

        # Convert MongoDB cursor to list of dictionaries
        portfolio_data = list(data)

        # Close MongoDB connection
        client.close()

        return JsonResponse(portfolio_data, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    




    # views.py




def get_job_data(request):
    # Connect to MongoDB
    client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
    db = client['portfolio']
    collection = db['job']

    # Retrieve job data from MongoDB
    job_data = collection.find_one({})

    # Convert MongoDB ObjectId to string for JSON serialization
    job_data['_id'] = str(job_data['_id'])

    # Close MongoDB connection
    client.close()

    return JsonResponse(job_data)


def slider_data(request):
    try:
        # Connect to MongoDB
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
        db = client['portfolio']
        collection = db['slider']

        # Fetch all documents from the collection
        documents = list(collection.find())

        # Convert documents to JSON format
        data = [{'image_url': doc[f'image{i}_url'], 'image_text': doc[f'image{i}_text']} for i, doc in enumerate(documents, start=1)]

        return JsonResponse(data, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    

def ebook_data(request):
    # Connect to MongoDB
    client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
    db = client['portfolio']
    collection = db['job']

    # Retrieve job data from MongoDB
    ebook_data = collection.find_one({})

    # Convert MongoDB ObjectId to string for JSON serialization
    ebook_data['_id'] = str(ebook_data['_id'])

    # Close MongoDB connection
    client.close()

    return JsonResponse(ebook_data)


def blogpage2(request):
    try:
        # Connect to MongoDB
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
        db = client['portfolio']
        collection = db['blogpage2']

        # Fetch all documents from the collection
        documents = list(collection.find())

        # Convert documents to JSON format
        data = [{'image_url': doc['image_url'], 'description': doc['description'], 'btn': doc['btn1']} for doc in documents]

        # Fetch the new document from the collection
        new_document = collection.find_one({"btn": "Get the ebook"})  # Assuming "btn" is unique

        # Store the new document in a variable named blogpage2
        if new_document:
            blogpage2 = {
                'image_url': new_document['image_url'],
                'description': new_document['description'],
                'btn': new_document['btn']
            }
            data.append(blogpage2)

        return JsonResponse(data, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

from django.http import JsonResponse
from pymongo import MongoClient

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
# Connect to MongoDB
client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
db = client['portfolio']
collection = db['blogs']

def get_blogs_data(request):
    blogs_data = collection.find_one()
    return JsonResponse(blogs_data['all_category'])

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
    



def get_learn_more_data(request):
    try:
        client = MongoClient("mongodb+srv://umer:umer123456@cluster0.chseyyo.mongodb.net/")
        db = client['portfolio']
        learn_more_collection = db['learn_more']
        
        # Fetch data from MongoDB
        data = learn_more_collection.find_one({})
        
        if data is None:
            return JsonResponse({'error': 'No data found in MongoDB'}, status=404)
        
        # Convert MongoDB ObjectId to string
        data['_id'] = str(data['_id'])
        
        return JsonResponse(data)
    except ConnectionFailure as e:
        return JsonResponse({'error': str(e)}, status=500)
