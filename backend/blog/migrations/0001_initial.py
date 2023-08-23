# Generated by Django 4.2.4 on 2023-10-07 14:24

import ckeditor.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Blog",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("json_field", models.JSONField(blank=True, default=dict, null=True)),
                ("title", models.CharField(max_length=200)),
                ("content", ckeditor.fields.RichTextField()),
                ("name", models.CharField(max_length=30)),
                (
                    "date_posted",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
                ("image_1", models.ImageField(upload_to="blog_pics/")),
                ("web_image", models.ImageField(upload_to="blog_pics/")),
                ("mobile_image", models.ImageField(upload_to="blog_pics/")),
                (
                    "isverified",
                    models.PositiveIntegerField(
                        choices=[
                            (1, "Pending"),
                            (2, "Approved"),
                            (3, "Rejected"),
                            (4, "In Progress"),
                        ],
                        default=1,
                    ),
                ),
                ("view_count", models.PositiveIntegerField(default=0)),
                (
                    "writer",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="blogs",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
