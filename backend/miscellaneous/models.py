from django.db import models
from utils.mixins import TimestampedModel, JsonModel
from utils.path import get_gallery_pics_path
from user.models import User


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
    pass
    

# Create your models here.
