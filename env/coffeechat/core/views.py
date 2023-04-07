from django.shortcuts import get_object_or_404, render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
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
        profile, _ = Profile.objects.get_or_create(user=request.user)
        return JsonResponse({"success": "True", "isProfileComplete": str(profile.isProfileComplete)})
    else: 
        return JsonResponse({"success": "False", "isProfileComplete": "Error"})
    
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
    
@csrf_exempt
def logout_view(request):   
    print(request.user.is_authenticated)
    logout(request)
    print(request.user.is_authenticated)
    return JsonResponse({"logout": "True"})

@csrf_exempt
def makeprofile_view(request):
    print(request.user.is_authenticated)
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
        print("fnerror")
        fnError = True
    if lastName == "":
        print("lnerror")
        lnError = True
    ugChoices = ['FR', 'SO', 'JR', 'SR']
    isUndergrad = ugChoices.count(year) > 0
    gradOnlySchools = ['COMM', 'DENT', 'DSGN', 'EDU', 'LAW', 'MED', 'SOPOC', 'VET']
    isInGradSchool = gradOnlySchools.count(school) > 0
    if isUndergrad and isInGradSchool:
        print("yrscerror")
        yrScError = True
    if not instagram.startswith('instagram.com/') and not instagram == '':
        print("instaerror")
        instaError = True
    if not fnError and not lnError and not yrScError and not instaError:
        profile, _ = Profile.objects.get_or_create(user=request.user)

        # update the profile fields with the new data
        print("update profile")
        profile.first_name = request.POST.get("firstName")
        profile.last_name = request.POST.get("lastName")
        profile.year = request.POST.get("year")
        profile.school = request.POST.get("school")
        profile.instagram = request.POST.get("instagram")
        profile.isProfileComplete = True
        
        # save the updated profile object to the database
        profile.save()
    return JsonResponse({"firstNameError": str(fnError),
                         "lastNameError": str(lnError),
                         "yearSchoolError": str(yrScError),
                         "instaError": str(instaError)}) 
                         

