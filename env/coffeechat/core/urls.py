"""coffeechat URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [
    path('api/admin/', admin.site.urls, name="admin"),
    path('api/profile/', ReactView.as_view(), name="welcome"),
    path('api/login/', login_view, name="login_view"),
    path('api/logout/', logout_view, name="logout_view"),
    path('api/signup/', signup_view, name="signup_view"),
    path('api/makeprofile/', makeprofile_view, name="makeprofile_view"),
    path('api/startmatch/', startmatch_view, name="startmatch_view"),
    path('api/checkmatchstarted/', getismatchstarted_view, name="getismatchstarted_view"),
    path('api/checkmatch/', getismatched_view, name="getismatched_view"),
    path('api/checkauth/', checkauth_view, name="checkauth_view"),
    path('api/getprofile/', getprofile_view, name="getprofile_view"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)