
from django.db import models
from django.contrib.auth.models import User

def product_image_upload_path(instance, filename):
    # Upload image to 'product_images/<product_name>/<filename>'
    return f'product_images/{instance.name}/{filename}'


class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='product_images/')
    
    def __str__(self):
        return self.name

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    cart_total = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    address = models.TextField(blank=True)
    phone_number = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.user.username

class CartItem(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='cart_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
