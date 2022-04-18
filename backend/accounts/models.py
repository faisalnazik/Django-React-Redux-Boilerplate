import os

from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth.models import UnicodeUsernameValidator
from django.core.validators import MinLengthValidator
from django.db import models
from django.utils.translation import gettext as _
import uuid


# This is just an example no need to keep them
ROLE_CHOICES = (

    ('Backend Developer', 'Backend Developer'),
    ('Full Stack Designer', 'Full Stack Designer'),
    ('Front End Developer', 'Front End Developer'),
    ('Full Stack Developer', 'Full Stack Developer'),
)

STATUS_CHOICES = (

    ('active', 'ACTIVE'),
    ('banned', 'BANNED'),
)


class CustomUserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    def _create_user(self, email, password=None, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password=None, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    username = None
    id = models.UUIDField(primary_key=True, unique=True,
                          default=uuid.uuid4, editable=False)
    email = models.EmailField(_('email address'), unique=True)
    isVerified = models.BooleanField(default=False)
    avatarUrl = models.ImageField(
        upload_to='users', null=True, blank=True, default='/placeholder.png')
    status = models.CharField(
        max_length=100, choices=STATUS_CHOICES, default='active')
    role = models.CharField(
        max_length=100, choices=ROLE_CHOICES, default='Full Stack Developer')
    company = models.CharField(max_length=100, default='NA')
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', "last_name"]

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    class Meta:
        ordering = ["-id"]
