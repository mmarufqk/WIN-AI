from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework import serializers
from .models import Note
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'name']  

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            name=validated_data.get('name', ''),
            password=validated_data['password']
        )
        return user

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}

class CustomTokenObtainPairSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        login_input = attrs.get("username")
        password = attrs.get("password")
        User = get_user_model()

        # Cari user
        try:
            user = User.objects.get(username=login_input)
        except User.DoesNotExist:
            try:
                user = User.objects.get(email=login_input)
            except User.DoesNotExist:
                try:
                    user = User.objects.get(name=login_input)
                except User.DoesNotExist:
                    user = None

        if user is None or not user.check_password(password):
            raise serializers.ValidationError("No active account found with the given credentials")

        refresh = RefreshToken.for_user(user)
        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        }

