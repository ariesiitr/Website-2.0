from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from utils.mixins import JsonModel, TimestampedModel
from utils.path import get_profile_pics_path

from .managers import UserManager


class User(AbstractUser):
    username = None
    email = models.EmailField(_("email address"), unique=True)
    is_staff = models.BooleanField(default=False)
    blocked = models.BooleanField(default=False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    objects = UserManager()

    def __str__(self):
        return self.email


class Team_Member(JsonModel, TimestampedModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="team")
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=20)
    profile_pic = models.ImageField(upload_to=get_profile_pics_path(), blank=True)  
    github = models.URLField(null=True,blank=True)
    linkdin = models.URLField(null=True,blank=True)
    additional_url = models.URLField(null=True,blank=True)

    class Meta:
        verbose_name = "Team Member"
        verbose_name_plural = "Team Members"

    

    def __str__(self):
        return f"{self.first_name} {self.last_name} {self.user.email}"
    




class Alum(JsonModel, TimestampedModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="alum")
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=20)
    profile_pic = models.ImageField(upload_to=get_profile_pics_path(), blank=True)
    linkdin = models.URLField(null=True,blank=True)
    facebook_url = models.URLField(null=True,blank=True)
    additional_url = models.URLField(null=True,blank=True)
    def __str__(self):
        return f"{self.first_name} {self.last_name} {self.user.email}"
    class Meta:
        verbose_name = "Alum"
        verbose_name_plural = "Alums"
    

    def __str__(self):
        return f"{self.first_name} {self.last_name} {self.user.email}"