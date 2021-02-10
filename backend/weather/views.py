from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .models import UserSearchHistory
from .serializers import UserSearchHistorySerializer
from django.conf import settings

import logging

logger = logging.getLogger(__file__)


@method_decorator(ensure_csrf_cookie, name="dispatch")
class GetCSRFToken(APIView):
    """ Retrieve a CSFR token to be used on FORM in the frontend"""
    permission_classes = [permissions.AllowAny, ]


    def get(self, request, format=None):
        return Response({"success": "CSRF cookie set"})


class ListSearchUserHistory(ListAPIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = UserSearchHistorySerializer

    def get_queryset(self, *args, **kwargs):
        return  UserSearchHistory.objects.filter(user=self.request.user)
