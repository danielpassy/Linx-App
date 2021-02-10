from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class UserSearchHistory(models.Model):
    """ Class that represents the User search history """

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="history")
    timestamp = models.DateTimeField(auto_now_add=True)
    city = models.CharField(max_length=85) # World longest city name
    data = models.TextField()
