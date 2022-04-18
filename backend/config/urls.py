from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.documentation import include_docs_urls
from rest_framework.schemas import get_schema_view
from drf_yasg import openapi
from django.views.generic import TemplateView

admin.site.site_header = "Django BoilerPlate Admin"
admin.site.site_title = "Django BoilerPlate Admin"
admin.site.index_title = "Welcome to Django BoilerPlate Admin"


router = routers.DefaultRouter()


schema_view = get_schema_view(title='Rest API')

urlpatterns = [
    # Authenticated Users only.
    path('admin/docs/', include('django.contrib.admindocs.urls')),
    path('admin/', admin.site.urls),


    path('', TemplateView.as_view(
        template_name='index.html',
        extra_context={'schema_url': 'openapi-schema'}
    ), name='swagger-ui'),
    path("api/", include(router.urls)),
    path('api/v1/docs/', include_docs_urls(title='Rest API')),
    path('api/v1/schema/', get_schema_view(
        title="Django REST API",
        description="Django REST API Intended to Integrate with React Frontend",
        version="1.0.0"
    ), name='openapi-schema'),

    path('api/v1/accounts/', include('accounts.urls')),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
