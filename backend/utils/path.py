
def get_profile_pics_path(instance, filename):
    return f"profile_pics/{filename}"


def get_gallery_pics_path(instance, filename):
    return f"gallery_pics/{instance.slug}.{filename.split('.')[-1]}"