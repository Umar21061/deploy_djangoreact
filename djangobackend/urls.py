from django.urls import path, re_path
from django.contrib import admin
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/get_couting_number/', views.get_couting_number, name='get_couting_number'),
    
  
    path('api/save_contact/', views.save_contact, name='save_contact'),
    
  
    path('api/chat/', views.chat, name='chat'),  
    path('api/blog_page/', views.blog_page, name='blog_page'),
     path('api/blog_data/', views.blog_data, name='blog_data'),
  
    path('api/learnmore/', views.learnmore, name='learnmore'),
    
     path('api/get_crew_data/', views.get_crew_data, name='get_crew_data'),

    path('api/global_project/', views.global_project, name='api/global_project'),
    path('api/project-detail/',views.project_detail, name='api/project_detail'),

    
    
    

    # Catch-all route for serving React app
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]
