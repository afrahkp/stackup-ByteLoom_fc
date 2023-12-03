# script.py
import os
import django

# Set the Django environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "your_project.settings")
django.setup()

# Assuming you are using Django models
from ecommerceapp.models import Product



# Create a product instance
product = Product.objects.create(
    name='watch',
    description='An elegant wristwatch.',
    price=99.99,
    image='w2.jpeg',  # This assumes you have the file 'w2.jpeg' in your media/product_images/watch/ directory.
   
)

# Optionally, print information for verification
print(f'Product Name: {product}')
print(f'Product Image: {product}')
