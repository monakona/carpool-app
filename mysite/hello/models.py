from django.db import models

# User class for all users with personal info
class User(models.Model):
    USER_TYPES = (
        ('D', 'Driver'),
        ('S', 'Shopper'),
    )
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    home_adress = models.CharField(max_length=100)
    email_address = models.CharField(max_length=50)
    user_name = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=15)
    user_type = models.CharField(max_length=1, choices=USER_TYPES)

    def _str_(self):
        return self.user_name

    def user_status(self): 
        "Returns whether the user is a shopper or driver."
        return self.user_type 

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