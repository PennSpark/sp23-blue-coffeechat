from rest_framework import serializers
from . models import *
  
class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        # fields = ['email', 'name', 'desc', 'image', 'year']
        fields = ['email', 'name', 'desc', 'year']