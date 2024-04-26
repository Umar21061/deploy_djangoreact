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
    
    
   
    
   
    
      
    

   
    path('', views.index, name='index'),
]
