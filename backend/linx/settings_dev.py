""" 
Settings for development

Settings for local development, 
overrides settings applied in the settings.py file
 """

DEBUG = False

ALLOWED_HOSTS = ["localhost", "0.0.0.0", "127.0.0.1"]
CORS_ALLOW_ALL_ORIGINS = True
# disable loggin
LOGGING = {}

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "linx",
        "PORT": 5432,
        "USER": "postgres",
        "PASSWORD": "12345678",
        "HOST": "localhost",
    }
}