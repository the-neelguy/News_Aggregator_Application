from django.shortcuts import render, redirect
from .models import Article
from django.core.management import call_command

def article_list(request):
    articles = Article.objects.all()
    return render(request, 'news/article_list.html', {'articles': articles})

def fetch_articles_view(request):
    if 'search_term' in request.GET:
        search_term = request.GET['search_term']
        call_command('fetch_articles', search_term)
        return redirect('article_list')
    return render(request, 'news/fetch_articles.html')