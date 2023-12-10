from django.urls import path
from .views import product_list

urlpatterns = [
    path('api/products/', product_list, name='product_list'),
    # Add other URL patterns as needed
]
