from django.urls import path
from .views import CreateShortURLView, RedirectShortURLView

urlpatterns = [
    path('create/', CreateShortURLView.as_view(), name='create-short-url'),
    path('<str:code>/', RedirectShortURLView.as_view(), name='redirect-short-url'),
]
