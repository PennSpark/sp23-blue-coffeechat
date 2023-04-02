from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    bio = models.TextField(blank=True)
    YEAR_CHOICES = [
        ('FR', 'Freshman'),
        ('SO', 'Sophomore'),
        ('JR', 'Junior'),
        ('SR', 'Senior'),
        ('GR', 'Graduate'),
    ]
    year = models.CharField(max_length=2, choices=YEAR_CHOICES, null=True)

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