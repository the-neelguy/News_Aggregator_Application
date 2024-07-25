from django.shortcuts import render
from .models import Article

# Create your views here.
def aticle_list(request):
    articles = Article.objects.all()
    return render(request, 'news/templates/article_list.html', {'articles':articles})
