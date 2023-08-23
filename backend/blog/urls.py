from django.urls import path
from .views import BlogView,SingleBlogView

urlpatterns = [
    path('', BlogView.as_view(),name='blog-list'),
    path('blogs/<int:blog_id>', SingleBlogView.as_view(), name='blog-count')
]