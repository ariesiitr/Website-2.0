# Generated by Django 4.2.4 on 2023-10-07 14:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import utils.path


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Gallery",
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
                ("slug", models.CharField(max_length=255)),
                ("alt_text", models.CharField(blank=True, max_length=255, null=True)),
                ("year", models.CharField(blank=True, max_length=4, null=True)),
                (
                    "image",
                    models.ImageField(upload_to=utils.path.get_gallery_pics_path),
                ),
                ("temporary", models.BooleanField(default=True)),
                (
                    "user",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.DO_NOTHING,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]