"""
Developed By : sumit kumar
facebook : fb.com/sumit.luv
Youtube :youtube.com/lazycoders
"""
from django.contrib import admin
from django.urls import path, include
from django import views
from django.contrib.auth.views import LoginView,LogoutView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('payment.urls')),
    path('',views.home_view,name=''),
    path('afterlogin', views.afterlogin_view,name='afterlogin'),
    path('logout', LogoutView.as_view(template_name='smart-mart/logout.html'),name='logout'),
    path('aboutus', views.aboutus_view),
    path('contactus', views.contactus_view,name='contactus'),
    path('search', views.search_view,name='search'),
    path('send-feedback', views.send_feedback_view,name='send-feedback'),
    path('view-feedback', views.view_feedback_view,name='view-feedback'),

    path('adminclick', views.adminclick_view),
    path('adminlogin', LoginView.as_view(template_name='ecom/adminlogin.html'),name='adminlogin'),
    path('admin-dashboard', views.admin_dashboard_view,name='admin-dashboard'),
    path('charge', views.charge, name='charge')
]


