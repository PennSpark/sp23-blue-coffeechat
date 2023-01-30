from django.db import models

# Create your models here.

class React(models.Model):
    name = models.CharField(max_length=100)
    desc = models.TextField(max_length=3000)
    image = models.ImageField()
    
    FRESHMAN = 'FR'
    SOPHOMORE = 'SO'
    JUNIOR = 'JR'
    SENIOR = 'SR'
    GRADUATE = 'GR'
    YEAR_CHOICES = [
        (FRESHMAN, 'Freshman'),
        (SOPHOMORE, 'Sophomore'),
        (JUNIOR, 'Junior'),
        (SENIOR, 'Senior'),
        (GRADUATE, 'Graduate'),
    ]
    year = models.CharField(
        max_length=2,
        choices=YEAR_CHOICES,
        default=FRESHMAN,
    )