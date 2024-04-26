from django.db import models

class Video(models.Model):
    title = models.CharField(max_length=100)
    url = models.URLField()
    industry = models.CharField(max_length=100)
    expertise = models.CharField(max_length=100)
