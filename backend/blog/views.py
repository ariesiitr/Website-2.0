from django.shortcuts import render,get_object_or_404
from .models import Blog
from django.views import View 
from Aries.views import ApplicationBaseView
from django.http import JsonResponse
from django.contrib.postgres.search import TrigramSimilarity
from rest_framework.exceptions import ParseError
from utils.pagination import DefaultPagination
from rest_framework.generics import ListCreateAPIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_204_NO_CONTENT
from rest_framework.views import APIView
from utils.constants import VerificationStatus
from .serializers import BlogSerializer


class SingleBlogView(APIView):
 def get(self, request, blog_id):
        blog = get_object_or_404(Blog, pk=blog_id)
        blog.view_count += 1
        blog.save()
        serializer= BlogSerializer(blog)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
        
        
class BlogView(ListCreateAPIView):
        
        allowed_methods = ('GET',)
        serializer_class = BlogSerializer
        pagination_class= DefaultPagination
        def get_queryset(self):
        
         queryset = Blog.objects.all().order_by('-view_count').filter(isverified=VerificationStatus.APPROVED)

         search_text = self.request.GET.get('search_text', None)
        
         if search_text:
            queryset = queryset.annotate(
                title_similarity=TrigramSimilarity('title', search_text)
            ).filter(
                 title_similarity__gt=0.2

             ).order_by('-title_similarity')
         
         return queryset