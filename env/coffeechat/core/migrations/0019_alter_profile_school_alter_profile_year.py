# Generated by Django 4.1.5 on 2023-04-15 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0018_alter_profile_partnerusername_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='school',
            field=models.CharField(blank=True, choices=[('CAS', 'Arts and Sciences'), ('SEAS', 'Engineering'), ('WH', 'Wharton'), ('NU', 'Nursing'), ('COMM', 'Annenberg School of Communication'), ('DENT', 'Dental Medicine'), ('DSGN', 'Weitzman School of Design'), ('EDU', 'Education'), ('LAW', 'Carey Law'), ('MED', 'Perelman School of Medicine'), ('SOPOC', 'Social Policy and Practice'), ('VET', 'Veterinary Medicine')], default='', max_length=5),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='profile',
            name='year',
            field=models.CharField(blank=True, choices=[('FR', 'Freshman'), ('SO', 'Sophomore'), ('JR', 'Junior'), ('SR', 'Senior'), ('GR', 'Graduate')], default='', max_length=2),
            preserve_default=False,
        ),
    ]
