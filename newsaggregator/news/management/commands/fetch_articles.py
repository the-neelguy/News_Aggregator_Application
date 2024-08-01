import requests
from django.core.management.base import BaseCommand
from news.models import Article
from datetime import datetime, timedelta
from django.utils import timezone
import pytz
from decouple import config

class Command(BaseCommand):
    help = 'Fetch news articles from News API'

    def add_arguments(self, parser):
        parser.add_argument('search_term', type=str, help='Search term for news article')

    def handle(self, *args, **options):
        # clear all existing DB contents
        Article.objects.all().delete()
        
        # Manipulation of the api parameters
        from_date = (datetime.now() - timedelta(days=7)).strftime('%Y-%m-%d')
        search_term = options['search_term']

        url = 'https://newsapi.org/v2/everything'
        params = {
            'apiKey': config('NEWS_API_KEY'),  # paste ur own api key here
            'sortBy': 'popularity',
            'q': search_term,
            'from': from_date
        } 
        response = requests.get(url, params=params)
        data = response.json()
        # print(data)
        
        articles_to_create = []

        for item in data['articles']:
            if item['title'] is None or '[Removed]' in item['title']:
                continue

            description = item['description'] if item['description'] is not None else 'Description not available'
            
            published_at = datetime.strptime(item['publishedAt'], '%Y-%m-%dT%H:%M:%SZ')
            published_at = timezone.make_aware(published_at, pytz.utc)
            
            article = Article(
                title=item['title'],
                description=description,
                source=item['source']['name'],
                published_at=published_at,
                url=item['url']
            )
            articles_to_create.append(article)

        Article.objects.bulk_create(articles_to_create)
        self.stdout.write(self.style.SUCCESS('Successfully fetched the articles'))
