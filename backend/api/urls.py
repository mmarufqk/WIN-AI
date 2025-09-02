from django.urls import path
from .views import NoteListCreate, NoteDelete, UserProfileView

urlpatterns = [
    path("notes/", NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", NoteDelete.as_view(), name="delete-note"),
    path("user/profile/", UserProfileView.as_view(), name="user-profile"),  # ✅ Tambahan
]
