from rest_framework.response import Response
from django.core.cache import cache
from rest_framework.status import HTTP_200_OK, HTTP_204_NO_CONTENT
from rest_framework.views import APIView
import random
from .serilizers import GallerySerializer
from .models import Gallery


class GalleryView(APIView):
    http_method_names = ('get',)

    @staticmethod
    def get(request):
        # TODO: Catching in production
        permanent_gallery = []
        temp_gallery = []
        permanent_gallery = Gallery.objects.filter(temporary=False)
        temp_gallery_pk_list = [i for i in list(
            Gallery.objects.filter(temporary=True).values_list('id', flat=True))]
        if len(temp_gallery_pk_list) > 12:
            random_list = []
            for i in range(12):
                random_list.append(random.choice(temp_gallery_pk_list))
            temp_gallery = Gallery.objects.filter(id__in=random_list)

        else:
            temp_gallery = Gallery.objects.filter(temporary=True)
        perm_query_set = GallerySerializer(permanent_gallery, many=True)
        temp_query_set = GallerySerializer(temp_gallery, many=True)

        return Response({"perment": perm_query_set.data, "temp": temp_query_set.data}, status=HTTP_200_OK)


# Create your views here.
