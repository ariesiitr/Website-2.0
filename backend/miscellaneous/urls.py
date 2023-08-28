from .views import GalleryView,GalleryListView
from django.urls import path

urlpatterns = [
    path('gallery/', GalleryView.as_view()),
    path('gallery/list/', GalleryListView.as_view()),

]