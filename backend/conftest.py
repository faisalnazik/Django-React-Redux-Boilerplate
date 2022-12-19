from rest_framework.test import APIClient
import pytest
import django

django.setup()


@pytest.mark.django_db
@pytest.fixture(autouse=True)
def enable_db_access_for_all_tests(db):
    pass


@pytest.fixture
def client():
    django.setup()
    return APIClient()
