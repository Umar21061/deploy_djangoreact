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
    path('api/global_project/', views.global_project, name='api/global_project'),
    path('api/project-detail/',views.project_detail, name='api/project_detail'),
    path('api/industry-data/', views.get_industry_data, name='api_industry_data'),
    path('api/industry-details/', views.get_industry_details, name='api_industry_details'),
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]
