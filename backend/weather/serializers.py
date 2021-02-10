from rest_framework import serializers
import json
from .models import UserSearchHistory, CITY_MAX_LENGHT


class CitySerializer(serializers.Serializer):
    """ Serializer for user input """

    city = serializers.CharField(max_length=CITY_MAX_LENGHT)


class UserSearchHistorySerializer(serializers.ModelSerializer):
    """ Serialize user Search History """

    data = serializers.SerializerMethodField()

    class Meta:
        model = UserSearchHistory
        fields = ("timestamp", "city", "data")
        extra_kwargs = {
            "timestamp": {"read_only": True},
            "city": {"read_only": True},
            "data": {"read_only": True},
        }

    def get_data(self, obj):
        """ Return the data as a Dictionary"""

        # TODO: Django turn double quotes do quotes in their ORM layer, it an extra effort to convert back
        data = obj.data.replace("'", '"')
        data = obj.data.replace('\'', '\"')
        return json.loads(data)