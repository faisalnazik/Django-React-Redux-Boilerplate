from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import RegisterUserView, UserProfileView

urlpatterns = [
    path("register/", RegisterUserView.as_view(), name="register"),
    path("login/", jwt_views.TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token_refresh"),
    path("profile/", UserProfileView.as_view(), name="user_profile"),
]
