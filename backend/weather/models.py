from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class UserSearchHistory(models.Model):
    """ Class that represents the User search history """

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    city = models.CharField(max_length=85) # World longest city name
     


class UserProfile(models.Model):
    first_name = models.CharField(max_length=255, default='')
    last_name = models.CharField(max_length=255, default='')
    phone = models.CharField(max_length=20, default='')
    city = models.CharField(max_length=20, default='')

    def __str__(self):
        return self.first_name
