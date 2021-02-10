from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework.decorators import api_view
from .models import UserSearchHistory, CITY_MAX_LENGHT
from .serializers import UserSearchHistorySerializer, CitySerializer
from . import util

import logging

logger = logging.getLogger(__file__)


def logging(request):
    """
    Logger view
    """
    logger.debug("This logs a debug message.")
    return HttpResponse("this worked")


@method_decorator(ensure_csrf_cookie, name="dispatch")
class GetCSRFToken(APIView):
    """ Retrieve a CSFR token to be used on FORM in the frontend"""

    permission_classes = [
        permissions.AllowAny,
    ]

    def get(self, request, format=None):
        return Response({"success": "CSRF cookie set"})


class ListSearchUserHistory(ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = UserSearchHistorySerializer

    def get_queryset(self, *args, **kwargs):
        return UserSearchHistory.objects.filter(
            anonymous_user=self.request.session.session_key
        )


@api_view(["GET"])
def get_weather(request, city):
    """ Calls the Weather API for the given city and return only the necessary data """

    weather_data = util.weather_api(city)
    if weather_data["cod"] == "200":
        instance = UserSearchHistory(
            anonymous_user=request.session.session_key, city=city, data=weather_data
        )
        instance.save()
        return Response(weather_data, status=status.HTTP_200_OK)

    elif weather_data["cod"] == "404":
        return Response(
            "A cidade não foi encontrada", status=status.HTTP_400_BAD_REQUEST
        )
    return Response(
        "Estamos enfrentando problemas de conexão, tente novamente mais tarde",
        status=status.HTTP_404_NOT_FOUND,
    )
