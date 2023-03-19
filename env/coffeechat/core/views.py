from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
from django.views.decorators.csrf import csrf_exempt

import json
from django.http import JsonResponse

class ReactView(APIView):
    
    serializer_class = ReactSerializer
  
    def get(self, request):
        # profile = [ {"name": profile.name, "desc": profile.desc, "image": profile.image, "year": profile.year} 
        profile = [ {"email": profile.email, "name": profile.name, "desc": profile.desc, "year": profile.year} 

        for profile in React.objects.all()]
        return Response(profile)
  
    def post(self, request):
  
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

@csrf_exempt
def login_view(request): 
    email, password = request.POST['email'], request.POST['password'] 
    user = authenticate(email=email, password=password) 
    print(email)
    print(password)
    return JsonResponse({'foo':'bar'})
    """if True:
    #if user is not None: 
        #login(request, user) 
        #return redirect('http://localhost:3000/profile') 
        #return redirect('https://localhost:3000')
        return 
    else: 
        return redirect('http://localhost:3000/login?error=LoginError')"""
    
def signup_view(request):
    user = User.objects_create_user(
        email = request.POST("email"),
        password = request.POST("password")
    )
    if len(request.POST("password")) < 8:
        return redirect('api/signup?error=InvalidPassword')
    elif request.POST[-9:] != "upenn.edu":
        return redirect('api/signup?error=InvalidEmail')
    else:
        login(request, user)
        return redirect('api/makeprofile')
    
def logout_view(request):
    logout(request)
    return redirect("/")