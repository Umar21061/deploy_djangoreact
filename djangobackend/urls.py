from django.urls import path 
from django.contrib import admin

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/get_market_data/', views.get_market_data, name='get_market_data'),
    path('api/get_crew_data/', views.get_crew_data, name='get_crew_data'),
    path('api/get_job_data/', views.get_job_data, name='get_job_data'),
    path('api/get_portfolio_data/', views.get_portfolio_data, name='get_portfolio_data'),
    path('api/slider_data/', views.slider_data, name='slider_data'),
    path('api/blogpage2/', views.blogpage2, name='blogpage2'),
    path('api/save_contact/', views.save_contact, name='save_contact'),
    path('api/get_reward_data/', views.get_reward_data, name='get_reward_data'),
    path('api/get_ebook_data/', views.ebook_data, name='get_ebook_data'),
    path('api/chat/', views.chat, name='chat'),  
    path('api/get_blogs_data/', views.get_blogs_data, name='get_blogs_data'),
    path('api/get_reward_data/', views.get_reward_data, name='get_reward_data'),
     path('api/learnmore/', views.get_learn_more_data, name='get_learn_more_data'),
    path('api/project_Details/', views.project_details, name='project_details'),
    path('api/generative_ai/', views.get_generative_ai_data, name='get_generative_ai_data'),
    path('api/language_processing/', views.get_language_processing_data, name='get_language_processing_data'),
    path('api/computer_vision/', views.get_computer_vision_data, name='get_computer_vision_data'),
    path('api/data_analytics/', views.get_data_analytics_data, name='get_data_analytics_data'),
    path('api/ai_driven_security/', views.get_ai_driven_security_data, name='get_ai_driven_security_data'),
     path('api/predictive_analytics/', views.get_predictive_analytics_data, name='get_predictive_analytics_data'),
     path('api/robotic_process_automation/', views.get_robotic_process_automation_data, name='get_robotic_process_automation_data'),
    
   
    
   
    
      
    

   
    path('', views.index, name='index'),
]
