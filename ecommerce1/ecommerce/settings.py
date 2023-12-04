from pathlib import Path
from django.conf import settings
from django.conf.urls.static import static

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# ... (Your existing code remains unchanged)

# Add the following configurations for media files

# Media files (uploads)
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / "media"

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Add the following if you are working in a development environment to serve media files
if settings.DEBUG:
    # Ensure that Django serves media files during development
    urlpatterns = [
        # ... your other urlpatterns here ...
    ]

    urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)
