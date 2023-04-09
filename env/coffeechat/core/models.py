from django.db import models
from django.contrib.auth.models import User

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    bio = models.CharField(max_length = 200, blank=True)
    YEAR_CHOICES = [
        ('FR', 'Freshman'),
        ('SO', 'Sophomore'),
        ('JR', 'Junior'),
        ('SR', 'Senior'),
        ('GR', 'Graduate'),
    ]
    year = models.CharField(max_length=2, choices=YEAR_CHOICES, null=True)
    SCHOOL_CHOICES = [
        ('CAS', 'Arts and Sciences'),
        ('SEAS', 'Engineering'),
        ('WH', 'Wharton'),
        ('NU', 'Nursing'),
        ('COMM', 'Annenberg School of Communication'),
        ('DENT', 'Dental Medicine'),
        ('DSGN', 'Weitzman School of Design'),
        ('EDU', 'Education'),
        ('LAW', 'Carey Law'),
        ('MED', 'Perelman School of Medicine'),
        ('SOPOC', 'Social Policy and Practice'),
        ('VET', 'Veterinary Medicine'),
    ]
    school = models.CharField(max_length=5, choices=SCHOOL_CHOICES, null=True)
    instagram = models.CharField(max_length=50, blank=True)
    image = models.ImageField(upload_to='profile_images/', default='/Users/kaiwang/Desktop/coffeechat/sp23-blue-coffeechat/env/coffeechat/media/profile_images/default.png')
    partnerUsername = models.CharField(max_length=100, blank=True)
    isProfileComplete = models.BooleanField(default=False)
    isMatchStarted = models.BooleanField(default=False)
    isMatched = models.BooleanField(default=False)

class React(models.Model):
    blankField = models.CharField(max_length=1)
    # email = models.CharField(max_length=100)
    # name = models.CharField(max_length=100)
    # desc = models.TextField(max_length=3000)
    # # image = models.ImageField(upload_to=".\images")
    
    # FRESHMAN = 'Freshman'
    # SOPHOMORE = 'Sophomore'
    # JUNIOR = 'Junior'
    # SENIOR = 'Senior'
    # GRADUATE = 'Graduate Student'
    # YEAR_CHOICES = [
    #     (FRESHMAN, 'Freshman'),
    #     (SOPHOMORE, 'Sophomore'),
    #     (JUNIOR, 'Junior'),
    #     (SENIOR, 'Senior'),
    #     (GRADUATE, 'Graduate'),
    # ]
    # year = models.CharField(
    #     max_length=16,
    #     choices=YEAR_CHOICES,
    #     default=FRESHMAN,
    # )