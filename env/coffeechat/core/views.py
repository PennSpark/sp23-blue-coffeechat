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
    if request.POST.get("email")[-9:] != "upenn.edu":
        return JsonResponse({"acctStatus": "InvalidEmail"})
    elif len(request.POST.get("password")) < 8:
        return JsonResponse({"acctStatus": "InvalidPassword"})
    else:
        try:
            user = User.objects.create_user(
                username = request.POST.get("email"),
                email = request.POST.get("email"),
                password = request.POST.get("password")
            )
            login(request, user)
        except:
            return JsonResponse({"acctStatus": "UserExists"})
        return JsonResponse({"acctStatus": "success"})
    
@csrf_exempt
def logout_view(request):   
    if request.user.is_authenticated:
        print("auth before logout")
        logout(request)
        return JsonResponse({"logout": "True"})
    else:
        return JsonResponse({"logout": "False"})

@csrf_exempt
def makeprofile_view(request):
    firstName = request.POST.get("firstName")
    lastName = request.POST.get("lastName")
    year = request.POST.get("year")
    school = request.POST.get("school")
    instagram = request.POST.get("instagram")
    image = request.FILES.get("image")
    bio = request.POST.get("bio")

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
    if not fnError and not lnError and not yrScError and not instaError and request.user.is_authenticated:
        profile, _ = Profile.objects.get_or_create(user=request.user)

        # update the profile fields with the new data
        print("update profile")
        profile.first_name = request.POST.get("firstName")
        profile.last_name = request.POST.get("lastName")
        profile.year = request.POST.get("year")
        profile.school = request.POST.get("school")
        profile.instagram = request.POST.get("instagram")
        profile.bio = request.POST.get("bio")
        profile.isProfileComplete = True
        

        print(image)

        if image:
            profile.image = image
        else:
            profile.image = 'default.png'
        
        # save the updated profile object to the database
        profile.save()
    return JsonResponse({"firstNameError": str(fnError),
                         "lastNameError": str(lnError),
                         "yearSchoolError": str(yrScError),
                         "instaError": str(instaError)}) 
                         

@csrf_exempt
def startmatch_view(request):
    if request.user.is_authenticated:
        profile, _ = Profile.objects.get_or_create(user=request.user)

        profile.username_formatching = request.user.username

        profile.isMatchStarted = True

        profile.save()

        return JsonResponse({"success": "True"})
    else:
        return JsonResponse({"success": "False"})
    
@csrf_exempt
def getismatchstarted_view(request):
    if request.user.is_authenticated:
        profile, _ = Profile.objects.get_or_create(user=request.user)
        return JsonResponse({"isMatchStarted": profile.isMatchStarted})
    else:
        return JsonResponse({"isMatchStarted": False})
    
@csrf_exempt
def getismatched_view(request):
    if request.user.is_authenticated:
        profile, _ = Profile.objects.get_or_create(user=request.user)
        return JsonResponse({"isMatched": profile.isMatched})
    else:
        return JsonResponse({"isMatched": False})

@csrf_exempt
def checkauth_view(request):
    # If this isn't working, make sure you're passing { withCredentials: true } in with the axios get
    return JsonResponse({"isAuth": request.user.is_authenticated})

@csrf_exempt
def getprofile_view(request):
    if request.user.is_authenticated:
        req_profile, _ = Profile.objects.get_or_create(user=request.user)
        partnerUsername = req_profile.partnerUsername
        partnerProfile = Profile.objects.get(username_formatching=partnerUsername)
        return JsonResponse({ "Success": True,
                                "FirstName": partnerProfile.first_name,
                                "LastName": partnerProfile.last_name,
                                "Year": partnerProfile.year,
                                "School": partnerProfile.school,
                                "Instagram": partnerProfile.instagram,
                                "Bio": partnerProfile.bio,
                                "ImageLink": "http://localhost:8000/media/" + str(partnerProfile.image),
                                "Email": partnerProfile.username_formatching})
    else:
        return JsonResponse({"Success": False})