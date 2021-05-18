# import pytest
# from django.contrib.auth import get_user_model
# from django.core.management import call_command
# from rest_framework.reverse import reverse

# User = get_user_model()


# def test_user_update(api_client, steve, amy):
#     update_steve = lambda username: api_client.put(
#         reverse("user-detail", kwargs={"pk": steve.id}), {"username": username}
#     )

#     # Not authenticated
#     response = update_steve(username="new_steve")
#     assert response.status_code == 401

#     # Amy can't update steve
#     api_client.force_authenticate(user=amy)
#     response = update_steve(username="new_steve")
#     assert response.status_code == 403

#     # Steve can update
#     assert len(User.objects.filter(username="new_steve")) == 0
#     api_client.force_authenticate(user=steve)
#     response = update_steve(username="new_steve")
#     assert response.status_code == 200
#     assert len(User.objects.filter(username="new_steve")) == 1

#     # Validation for username
#     response = update_steve(username="invalid username :)")
#     assert response.status_code == 400


# def test_user_detail(api_client, steve, amy):
#     get_steve = lambda: api_client.get(reverse("user-detail", kwargs={"pk": steve.id}))

#     # Not authenticated
#     response = get_steve()
#     assert response.status_code == 401

#     # Steve can get detail
#     api_client.force_authenticate(user=steve)
#     response = get_steve()
#     assert response.status_code == 200

#     # Amy can't get Steve detail
#     api_client.force_authenticate(user=amy)
#     response = get_steve()
#     assert response.status_code == 403


# def test_auth_setup(api_client, settings):
#     settings.ALLOW_GUEST_ACCESS = False
#     response = api_client.get(reverse("auth-setup"))
#     assert response.status_code == 200
#     assert response.data == dict(ALLOW_GUEST_ACCESS=False)

#     settings.ALLOW_GUEST_ACCESS = True
#     response = api_client.get(reverse("auth-setup"))
#     assert response.status_code == 200
#     assert response.data == dict(ALLOW_GUEST_ACCESS=True)


# def test_guest_registration_not_allowed(api_client, settings):
#     settings.ALLOW_GUEST_ACCESS = False

#     response = api_client.post(reverse("guest-registration"))
#     assert response.status_code == 403


# def test_guest_registration(api_client, settings):
#     settings.ALLOW_GUEST_ACCESS = True

#     assert User.objects.count() == 0
#     call_command("loaddata", "avatars.yaml")
#     response = api_client.post(reverse("guest-registration"))

#     # Guest user is created
#     assert response.status_code == 201
#     guest_users = User.objects.filter(is_guest=True)
#     assert guest_users.count() == 1
#     guest = guest_users.first()
#     assert User.objects.filter(username="alice").exists()

#     # Should have a random avatar
#     assert guest.avatar is not None

# def test_user_registration_email_entered(api_client):
#     assert User.objects.count() == 0
#     response = api_client.post(
#         reverse("rest_register"),
#         {
#             "password1": "Test12345!",
#             "password2": "Test12345!",
#             "email": "test@test.ee",
#             "username": "testaccount",
#         },
#     )
#     assert response.status_code == 201
#     assert User.objects.count() == 1


# def test_user_registration_no_email_entered(api_client):
#     assert User.objects.count() == 0
#     response = api_client.post(
#         reverse("rest_register"),
#         {
#             "password1": "Test12345!",
#             "password2": "Test12345!",
#             "username": "testaccount",
#         },
#     )
#     assert response.status_code == 400
#     assert response.data["email"][0] == "This field is required."
#     assert User.objects.count() == 0