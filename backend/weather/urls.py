from django.urls import path
from . import views

urlpatterns = [
    path('get_weather/<str:city>/', views.get_weather, name='weather'),
    path('history/', views.ListSearchUserHistory.as_view(), name='history'),
    path('csrf_token/', views.GetCSRFToken.as_view(), name='csrf_token'),
]
