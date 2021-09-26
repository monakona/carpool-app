from django.db import models

# User class for all users with personal info
class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    home_adress = models.CharField(max_length=100)
    email_address = models.CharField(max_length=50)
    user_name = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=15)

    def _str_(self):
        return self.user_name

# Shopper class for users using shopping functions
class Shopper(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE)

# Rider class for users using riding functions 
class Rider(models.Model): 
    User = models.ForeignKey(User, on_delete=models.CASCADE)

# Store class for grocery store
class Store(models.Model): 
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)

    def _str_(self): 
        return self.name

# Drop off class for drop off locations 
class DropOff(models.Model): 
    address = models.CharField(max_length=100)

    def _str_(self):
        return self.address