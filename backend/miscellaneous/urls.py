from .views import GalleryView,GalleryListView,ProjectsView,AchivementView
from django.urls import path

urlpatterns = [
    path('gallery/', GalleryView.as_view()),
    path('gallery/list/', GalleryListView.as_view()),
    path('projects/', ProjectsView.as_view()),
    path('achivements/', AchivementView.as_view()),

]