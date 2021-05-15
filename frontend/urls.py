from django.urls import path
from .views import IndexView

urlpatterns = [
    path('about/', IndexView.as_view(name="homepage")),
]