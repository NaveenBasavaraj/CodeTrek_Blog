from django.urls import path
from ct_server.views import main

urlpatterns = [
    path('main/', main, name='main')
]
