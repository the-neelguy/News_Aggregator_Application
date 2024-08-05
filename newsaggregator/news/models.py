from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    source = models.CharField(max_length=100)
    published_at = models.DateTimeField()
    url = models.URLField(max_length=300)

    def __str__(self):
        return self.title