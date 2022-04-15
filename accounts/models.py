import os

from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth.models import UnicodeUsernameValidator
from django.core.validators import MinLengthValidator
from django.db import models
from django.utils.translation import gettext as _
import uuid


class Avatar(models.Model):
    photo = models.ImageField(upload_to="avatars")

    def __str__(self):
        return os.path.basename(self.photo.name)


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
    avatar = models.ForeignKey(
        "Avatar", null=True, blank=True, on_delete=models.PROTECT
    )
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', "last_name"]

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    class Meta:
        ordering = ["-id"]
