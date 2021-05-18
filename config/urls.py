from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.documentation import include_docs_urls
from rest_framework.schemas import get_schema_view
from frontend.views import IndexView
from accounts.api import (
    UserViewSet,
    AvatarViewSet,
    AuthSetup,
    GuestRegistration,
)

router = routers.DefaultRouter()
router.register(r"avatars", AvatarViewSet)
router.register(r"users", UserViewSet)


schema_view = get_schema_view(title='Rest API')

urlpatterns = [
    #coming from frontend app using react every thing we connect in App.js in components will be
    #rendered here in IndexView using Same Django app Server
    path('', IndexView.as_view(), name="home"), 

    
    path('admin/', admin.site.urls),
    path("api/", include(router.urls)),
    path("api-auth/", include("rest_framework.urls")),
    path("auth/", include("dj_rest_auth.urls")),
    path("auth/registration/", include("dj_rest_auth.registration.urls")),
    path("auth/setup/", AuthSetup.as_view(), name="auth-setup"),
    path("auth/guest/", GuestRegistration.as_view(), name="guest-registration"),
    path('docs/', include_docs_urls(title='Rest API')),
    path('schema/', schema_view),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    try:
        import debug_toolbar

        urlpatterns = [path("__debug__/", include(debug_toolbar.urls))] + urlpatterns
    except ModuleNotFoundError:
        pass
