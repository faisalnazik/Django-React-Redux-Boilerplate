from django.urls import path, include
from rest_framework import routers
from .views import (
    UserViewSet,
    RegisterView,
    MyTokenObtainPairView
)

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


router = routers.DefaultRouter()
router.register(r"users", UserViewSet)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
    path('refresh_token/', TokenRefreshView.as_view(), name='refresh_token'),
    path("", include(router.urls)),
]
