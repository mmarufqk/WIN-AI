from django.shortcuts import render
from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
# from google.oauth2 import id_token
# from google.auth.transport import requests


# Create your views here.

class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)
 
class NoteDelete(generics.DestroyAPIView):
    queryset = Note.objects.all()
    permission_classes =[IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({
            "name": user.first_name or user.username,
            "email": user.email,
            "avatar": getattr(user, "avatar", None)
        })

# class GoogleLoginView(APIView):
#     permission_classes = [AllowAny] 

#     def post(self, request):
#         token = request.data.get("token")
#         if not token:
#             return Response({"error": "No token provided"}, status=status.HTTP_400_BAD_REQUEST)

#         try:
#             idinfo = id_token.verify_oauth2_token(
#                 token,
#                 requests.Request(),
#                 "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com" 
#             )

#             email = idinfo.get("email")
#             name = idinfo.get("name")

#             user, created = User.objects.get_or_create(
#                 username=email,
#                 defaults={"email": email, "first_name": name}
#             )

#             refresh = RefreshToken.for_user(user)

#             return Response({
#                 "refresh": str(refresh),
#                 "access": str(refresh.access_token),
#                 "user": {
#                     "id": user.id,
#                     "email": user.email,
#                     "name": user.first_name,
#                 }
#             })

#         except ValueError:
#             return Response({"error": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)
