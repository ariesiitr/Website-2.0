from django.db import models
from utils.mixins import TimestampedModel, JsonModel
from utils.path import get_gallery_pics_path, get_project_pics_path, get_achivments_pics_path
from utils.constants import ProjectConstants
from user.models import User
from utils.errors import EMPTY_FIELD


class AbstractImage(TimestampedModel,JsonModel):
    slug = models.CharField(max_length=255)
    caption = models.CharField(max_length=255, blank=True, null=True)
    alt_text = models.CharField(max_length=255, blank=True, null=True)
    year = models.CharField(max_length=4, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, blank=True, null=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.slug
    
class Gallery(AbstractImage):
    image = models.ImageField(upload_to=get_gallery_pics_path)
    temporary = models.BooleanField(default=True)

class ProjectImageField(AbstractImage):
    image = models.ImageField(upload_to=get_project_pics_path)
    


class Projects(TimestampedModel,JsonModel):
    vertical = models.PositiveIntegerField(default=ProjectConstants.AR_VR_DEV, choices=ProjectConstants.VERTICAL_CHOICES)
    name = models.CharField()
    image = models.ForeignKey(ProjectImageField, on_delete=models.DO_NOTHING, blank=True, null=True)
    description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, blank=True, null=True)
    redirect_link = models.URLField(blank=True, null=True)

class Achivements (TimestampedModel,JsonModel):
    title = models.CharField(max_length=255)
    description = models.TextField()
    year = models.CharField(max_length=4, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, blank=True, null=True)
    image = models.ImageField(upload_to=get_achivments_pics_path)

# Create your models here.
