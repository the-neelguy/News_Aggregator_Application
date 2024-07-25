import requests
from django.core.management.base import BaseCommand
from news.models import Article
from datetime import datetime

# apikey = 94b4a5d8c5484598ab852fbd28bd95d7

class Command(BaseCommand):
    help = 'Fetch news articles from News API'


    def handle(self, *args, **kwargs):
        url = 'https://newsapi.org/v2/top-headlines'
        params = {
            'apiKey' : '94b4a5d8c5484598ab852fbd28bd95d7',
            'country' : 'us'
        }
        reponse = requests.get(url, params=params)
        data = reponse.json()

        for item in data['articles']:
            article = Article(
                title = item['title'],
                content = item['content'],
                source = item['source']['name'],
                published_at = datetime.strptime(item['publishedAt'], '%Y-%m-%dT%H:%M:%SZ'),
                url = item['url']
            )
            article.save()
        self.stdout.write(self.style.SUCCESS('Successfully fetched the articles'))
        