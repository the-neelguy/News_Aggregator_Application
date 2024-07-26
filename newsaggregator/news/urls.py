from django.urls import path
from .views import article_list, fetch_articles_view

urlpatterns = [
    path('', article_list, name='article_list'),
    path('fetch_article/', fetch_articles_view, name='fetch_articles'),
]