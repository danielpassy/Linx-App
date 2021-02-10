from rest_framework import serializers
from .models import UserSearchHistory

class UserSearchHistorySerializer(serializers.ModelSerializer):
    """ Serialize user Search History """
    
    class meta:
        model = UserSearchHistory
        fields = ("timestamp", "city", "data")
        extra_kwargs = {
            "timestamp": {"read_only": True},
            "city": {"read_only": True},
            "data": {"read_only": True},
        }