from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.generics import ListAPIView,ListCreateAPIView
import random
from .serilizers import GallerySerializer , AchivementsSerializer , ProjectsSerializer
from .models import Gallery, Achivements, Projects
from Aries.views import ApplicationBaseView
from utils.pagination import DefaultPagination
from utils.errors import EMPTY_FIELD

class GalleryView(ApplicationBaseView):
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
    
class GalleryListView(ListAPIView):
    http_method_names = ('get',)
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all()
    pagination_class = DefaultPagination


class ProjectsView(ListCreateAPIView):
    http_method_names = ('get',)
    serializer_class = ProjectsSerializer
    def get_queryset(self):
        vertical = self.request.GET.get('vertical', None)
        if vertical:
            return Projects.objects.filter(vertical=vertical).order_by('-id')
        else:
            raise Exception(EMPTY_FIELD('vertical'))
       
    pagination_class = DefaultPagination


class AchivementView(ListAPIView):
    http_method_names = ('get',)
    serializer_class = AchivementsSerializer
    queryset = Achivements.objects.all()
    pagination_class = DefaultPagination    
    


# Create your views here.
