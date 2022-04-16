from rest_framework import serializers
from .models import Avatar, CustomUser
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.Serializer):
    id = serializers.UUIDField(read_only=True)
    avatar = serializers.ImageField(read_only=True)
    first_name = serializers.CharField(read_only=True)
    last_name = serializers.CharField(read_only=True)
    is_staff = serializers.BooleanField(read_only=True)


class UserSerializerWithToken(UserSerializer):
    email = serializers.EmailField(read_only=True)
    access = serializers.SerializerMethodField(read_only=True)
    refresh = serializers.SerializerMethodField(read_only=True)

    def get_access(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

    def get_refresh(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token)
