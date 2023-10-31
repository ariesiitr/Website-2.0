from rest_framework import serializers

from .models import Gallery,ProjectImageField,Projects,Achivements

class GallerySerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Gallery
        fields = '__all__'
        
class AchivementsSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Achivements
        fields = '__all__'

class ProjectImageFieldSerializer(serializers.ModelSerializer):
       
    class Meta:
        model = ProjectImageField
        fields = '__all__'
class ProjectsSerializer(serializers.ModelSerializer):
    image = ProjectImageFieldSerializer()
    class Meta:
        model = Projects
        fields = '__all__'