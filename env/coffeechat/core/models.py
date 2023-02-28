from django.db import models

# Create your models here.

class React(models.Model):
    email = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    desc = models.TextField(max_length=3000)
    # image = models.ImageField(upload_to=".\images")
    
    FRESHMAN = 'Freshman'
    SOPHOMORE = 'Sophomore'
    JUNIOR = 'Junior'
    SENIOR = 'Senior'
    GRADUATE = 'Graduate Student'
    YEAR_CHOICES = [
        (FRESHMAN, 'Freshman'),
        (SOPHOMORE, 'Sophomore'),
        (JUNIOR, 'Junior'),
        (SENIOR, 'Senior'),
        (GRADUATE, 'Graduate'),
    ]
    year = models.CharField(
        max_length=16,
        choices=YEAR_CHOICES,
        default=FRESHMAN,
    )