from rest_framework import serializers
from .models import UserSearchHistory, CITY_MAX_LENGHT


class CitySerializer(serializers.Serializer):
    """ Serializer for user input """

    city = serializers.CharField(max_length=CITY_MAX_LENGHT)


class UserSearchHistorySerializer(serializers.ModelSerializer):
    """ Serialize user Search History """

    class Meta:
        model = UserSearchHistory
        fields = ("timestamp", "city", "data")
        extra_kwargs = {
            "timestamp": {"read_only": True},
            "city": {"read_only": True},
            "data": {"read_only": True},
        }