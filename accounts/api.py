import uuid

import shortuuid
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import filters
from rest_framework import mixins
from rest_framework.decorators import action
from rest_framework.exceptions import PermissionDenied
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet
from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import Avatar
from .permissions import IsSelf
from .serializers import (
    AvatarSerializer,
    UserSerializer,
    UserDetailSerializer,
    UserSearchSerializer,
)

User = get_user_model()


class UserViewSet(
    mixins.RetrieveModelMixin, mixins.UpdateModelMixin, GenericViewSet,
):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated, IsSelf]

    def get_serializer_class(self):
        if self.action == "retrieve" or self.action == "update":
            return UserDetailSerializer
        return super().get_serializer_class()

    @action(detail=True, methods=["post"])
    def update_avatar(self, request, pk):
        avatar_id = request.data.get("id")
        avatar = Avatar.objects.get(id=avatar_id)
        user = self.get_object()
        user.avatar = avatar
        user.save()
        return Response(AvatarSerializer(instance=avatar).data)


class AvatarViewSet(ReadOnlyModelViewSet):
    serializer_class = AvatarSerializer
    queryset = Avatar.objects.all()
    permission_classes = [IsAuthenticated]


class AuthSetup(APIView):
    def get(self, request, *args, **kwargs):
        return Response({"ALLOW_GUEST_ACCESS": settings.ALLOW_GUEST_ACCESS})
