from django.urls import path, re_path
from django.contrib import admin
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/get_market_data/', views.get_market_data, name='get_market_data'),
    
    path('api/slider_data/', views.slider_data, name='slider_data'),
    path('api/blogpage2/', views.blogpage2, name='blogpage2'),
    path('api/save_contact/', views.save_contact, name='save_contact'),
    path('api/get_reward_data/', views.get_reward_data, name='get_reward_data'),
    path('api/get_ebook_data/', views.ebook_data, name='get_ebook_data'),
    path('api/chat/', views.chat, name='chat'),  
    path('api/get_blogs_data/', views.get_blogs_data, name='get_blogs_data'),
    path('api/project_Details/', views.project_details, name='project_details'),
    path('api/learnmore/', views.learnmore, name='learnmore'),

    path('api/global_project/', views.global_project, name='api/global_project'),
    path('api/project-detail/',views.project_detail, name='api/project_detail'),

    
    
    

    # Catch-all route for serving React app
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]
