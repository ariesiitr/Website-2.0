from configurations import Configuration
from pathlib import Path
import os

import dj_database_url
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!


class Common(Configuration):

    SECRET_KEY = os.environ["SECRET_KEY"]

    # SECURITY WARNING: don't run with debug turned on in production!
    DEBUG = True

    ALLOWED_HOSTS = []

    # Application definition

    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        # packages
        'oauth2_provider',
        'rest_framework',
        'rest_framework_swagger',
        'drf_yasg',
        # apps
        'user',
        'miscellaneous',

    ]

    MIDDLEWARE = [
        'django.middleware.cache.UpdateCacheMiddleware',  # new
        'django.middleware.common.CommonMiddleware',
        'django.middleware.cache.FetchFromCacheMiddleware',  # new
        'django.middleware.security.SecurityMiddleware',
        'django.contrib.sessions.middleware.SessionMiddleware',
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
    ]

    ROOT_URLCONF = 'Aries.urls'

    TEMPLATES = [
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [],
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    'django.template.context_processors.debug',
                    'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',
                    'django.contrib.messages.context_processors.messages',
                ],
            },
        },
    ]

    WSGI_APPLICATION = 'Aries.wsgi.application'

    # Database
    # https://docs.djangoproject.com/en/4.2/ref/settings/#databases

    DATABASES = {
        "default": dj_database_url.config(
            default=os.getenv("DJ_DATABASE_URL"),
            conn_max_age=int(os.getenv("POSTGRES_CONN_MAX_AGE", 600)),
        )
    }

    # CACHES = {
    #     "default": {
    #         "BACKEND": "django.core.cache.backends.redis.RedisCache",
    #         "LOCATION": "redis://127.0.0.1:6379",
    #     }
    # }

    # Password validation
    # https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

    AUTH_PASSWORD_VALIDATORS = [
        {
            'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
        },
        {
            'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        },
        {
            'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
        },
        {
            'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
        },
    ]

    # Internationalization
    # https://docs.djangoproject.com/en/4.2/topics/i18n/

    LANGUAGE_CODE = 'en-us'

    TIME_ZONE = 'UTC'

    USE_I18N = True

    USE_TZ = True

    # Static files (CSS, JavaScript, Images)
    # https://docs.djangoproject.com/en/4.2/howto/static-files/

    STATIC_URL = 'static/'

    # Default primary key field type
    # https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

    DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

    AUTH_USER_MODEL = 'user.User'

    REST_FRAMEWORK = {
        'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema'}
    
    # CACHE_MIDDLEWARE_ALIAS = 'default'  # The cache alias to use for storage and 'default' is **local-memory cache**.
    # CACHE_MIDDLEWARE_SECONDS = '60000'    # number of seconds before each page is cached
    # CACHE_MIDDLEWARE_KEY_PREFIX = ''    # This is used when cache is shared across multiple sites that use the same Django instance. You use an empty string if you don’t care for it.

