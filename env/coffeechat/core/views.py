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
  
    def get_profile(self, request):
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
    email = request.POST.get('email')
    password = request.POST.get('password')
    user = authenticate(username=email, password=password) 
    if user is not None: 
        login(request, user)
        return JsonResponse({"success": "True"})
    else: 
        return JsonResponse({"success": "False"})
    
@csrf_exempt
def signup_view(request):
    if len(request.POST.get("password")) < 8:
        return JsonResponse({"acctStatus": "InvalidPassword"})
    elif request.POST.get("email")[-9:] != "upenn.edu":
        return JsonResponse({"acctStatus": "InvalidEmail"})
    else:
        user = User.objects.create_user(
            username = request.POST.get("email"),
            email = request.POST.get("email"),
            password = request.POST.get("password")
        )
        login(request, user)
        return JsonResponse({"acctStatus": "success"})
    
def logout_view(request):
    logout(request)
    return redirect("/")

@csrf_exempt
def makeprofile_view(request):
    firstName = request.POST.get("firstName")
    lastName = request.POST.get("lastName")
    year = request.POST.get("year")
    school = request.POST.get("school")
    instagram = request.POST.get("instagram")

    fnError = False
    lnError = False
    yrScError = False
    instaError = False

    if firstName == "":
        fnError = True
    if lastName == "":
        lnError = True
    ugChoices = ['FR', 'SO', 'JR', 'SR']
    isUndergrad = ugChoices.count(year) > 0
    gradOnlySchools = ['COMM', 'DENT', 'DSGN', 'EDU', 'LAW', 'MED', 'SOPOC', 'VET']
    isInGradSchool = gradOnlySchools.count(school) > 0
    if isUndergrad and not isInGradSchool:
        yrScError = True
    if instagram[:13] != 'instagram.com/':
        instaError = True
    return JsonResponse({""}) 

