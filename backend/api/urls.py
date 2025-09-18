from django.urls import path
from .views import (
    NoteListCreate,
    NoteDelete,
    UserProfileView,
    CreateUserView,
    CustomTokenObtainPairView,
    DatasetListCreate,
)

urlpatterns = [
    # Notes
    path("notes/", NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", NoteDelete.as_view(), name="delete-note"),

    # User
    path("user/profile/", UserProfileView.as_view(), name="user-profile"),
    path("user/register/", CreateUserView.as_view(), name="user-register"),
    path("user/login/", CustomTokenObtainPairView.as_view(), name="token-obtain-pair"),

    # Dataset
    path("datasets/", DatasetListCreate.as_view(), name="dataset-list-create"),
]
