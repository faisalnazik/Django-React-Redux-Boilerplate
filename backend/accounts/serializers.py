from rest_framework import serializers
from .models import CustomUser
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.Serializer):
    id = serializers.UUIDField(read_only=True)
    avatarUrl = serializers.ImageField(read_only=True)
    name = serializers.SerializerMethodField(read_only=True)
    isVerified = serializers.BooleanField(read_only=True)
    status = serializers.CharField(read_only=True)
    role = serializers.CharField(read_only=True)
    company = serializers.CharField(read_only=True)

    def get_name(self, obj):
        return str(obj.first_name + " " + obj.last_name)


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
