def get_blog_pics_path():
    return f"blog_pics/"


def get_profile_pics_path(instance, filename):
    return f"profile_pics/{filename}"


def get_gallery_pics_path(instance, filename):

    return f"gallery_pics/{instance.slug}.{filename.split('.')[-1]}"

def get_project_pics_path(instance, filename):
    return f"project_pics/{filename}"

def get_achivments_pics_path(instance, filename):

    return f"achivements_pics/{filename}"