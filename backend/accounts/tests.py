import pytest
from django.contrib.auth import get_user_model
from .models import User
import json
from django.test import Client


@pytest.mark.django_db
def test_user_creation():
    # Create a new user using the create_user method of the UserManager
    user = User.objects.create_user(
        email="test@example.com", name="Test User", password="password"
    )

    # Get the user model
    UserModel = get_user_model()

    # Check that the created user is an instance of the user model
    assert isinstance(user, UserModel)


@pytest.mark.django_db
def test_superuser_creation():
    # Create a new superuser using the create_superuser method of the UserManager
    superuser = User.objects.create_superuser(
        email="test@example.com", name="Test Superuser", password="password"
    )

    # Check that the created user is a superuser
    assert superuser.is_superuser


@pytest.mark.django_db
def test_user_string_representation():
    # Create a new user
    user = User.objects.create_user(
        email="test@example.com", name="Test User", password="password"
    )

    # Check that the string representation of the user is the name
    assert str(user) == "Test User"
