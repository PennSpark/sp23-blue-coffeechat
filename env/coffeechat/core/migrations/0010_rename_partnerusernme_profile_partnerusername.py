# Generated by Django 4.1.5 on 2023-04-06 21:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_profile_partnerusernme'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='partnerUsernme',
            new_name='partnerUsername',
        ),
    ]
