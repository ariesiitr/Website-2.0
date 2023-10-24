from django.db import models
from django.utils import timezone
from utils.constants import VerificationStatus
from utils.path import get_blog_pics_path
from utils.mixins import JsonModel, TimestampedModel
from ckeditor.fields import RichTextField
from django.contrib.auth import get_user_model
from user.models import User

# Create your models here.
class Blog(JsonModel,TimestampedModel):
    title=models.CharField(max_length=200)
    content= RichTextField()
    writer = models.ForeignKey(User,on_delete=models.CASCADE,related_name='blogs')
    name= models.CharField(max_length=30)
    date_posted= models.DateTimeField(default=timezone.now)
    image_1= models.ImageField(upload_to=get_blog_pics_path())
    web_image= models.ImageField(upload_to=get_blog_pics_path())
    mobile_image= models.ImageField(upload_to=get_blog_pics_path())
    isverified= models.PositiveIntegerField(default=VerificationStatus.PENDING,choices=VerificationStatus.VERIFICATION_STATUS_CHOICES)
    view_count = models.PositiveIntegerField(default=0)
    
        
    def __str__(self):
        return self.title
    
    
    
    