# Generated by Django 4.1.5 on 2023-04-06 21:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_profile_instagram_profile_school_alter_profile_bio'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='partnerUsernme',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]