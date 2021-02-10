from django.db import models
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session

# World longest city name
CITY_MAX_LENGHT = 85 

# Create your models here.
class UserSearchHistory(models.Model):
    """ Class that represents the User search history """

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="history", null=True)
    anonymous_user = models.ForeignKey(Session, on_delete=models.CASCADE, related_name="history", null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    city = models.CharField(max_length=CITY_MAX_LENGHT) 
    data = models.TextField()
