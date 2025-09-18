from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email", "name"]

    def __str__(self):
        return self.username


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title


class Dataset(models.Model):
    name = models.CharField(max_length=255)  # Nama dataset biar gampang dibedain
    file = models.FileField(upload_to="datasets/")  # Simpan CSV ke folder media/datasets/
    uploaded_at = models.DateTimeField(auto_now_add=True)
    uploaded_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="datasets")

    def __str__(self):
        return f"{self.name} (by {self.uploaded_by.username})"
