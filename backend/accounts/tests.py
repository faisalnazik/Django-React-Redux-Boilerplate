from django.test import TestCase
from django.contrib.auth import get_user_model
from django.conf import settings


class CustomUserTestCase(TestCase):

    def test_custom_user_model(self):
        assert settings.AUTH_USER_MODEL == "accounts.CustomUser"

    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(
            first_name='will',
            last_name='john',
            email='will@email.com',
            password='testpass123'
        )
        self.assertEqual(user.first_name, 'will')
        self.assertEqual(user.last_name, 'john')
        self.assertEqual(user.email, 'will@email.com')
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_create_superuser(self):
        User = get_user_model()
        admin_user = User.objects.create_superuser(
            first_name='super',
            last_name='admin',
            email='superadmin@email.com',
            password='testpass123'
        )
        self.assertEqual(admin_user.first_name, 'super')
        self.assertEqual(admin_user.last_name, 'admin')
        self.assertEqual(admin_user.email, 'superadmin@email.com')
        self.assertTrue(admin_user.is_active)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)

    def user_create(self):
        User = get_user_model()
        User.objects.create(
            first_name="john", last_name="doe", email='email@email.com', isVerified=False,
            avatarUrl='/fakepath/avatar.png', status='active', role='Full Stack Developer', company='Some Company')
