from django.db import models
from django_google_maps import fields as map_fields

# User class for all users with personal info
# class User(models.Model):
#     USER_TYPES = (
#         ('D', 'Driver'),
#         ('S', 'Shopper'),
#     )
#     first_name = models.CharField(max_length=50)
#     last_name = models.CharField(max_length=50)
#     home_adress = models.CharField(max_length=100)
#     email_address = models.CharField(max_length=50)
#     user_name = models.CharField(max_length=20)
#     phone_number = models.CharField(max_length=15)
#     user_type = models.CharField(max_length=1, choices=USER_TYPES)

#     def _str_(self):
#         return self.user_name

#     def user_status(self): 
#         "Returns whether the user is a shopper or driver."
#         return self.user_type 

# # Store class for grocery store
# class Store(models.Model): 
#     name = models.CharField(max_length=50)
#     address = models.CharField(max_length=100)

#     def _str_(self): 
#         return self.name

# # Drop off class for drop off locations 
# class DropOff(models.Model): 
#     address = models.CharField(max_length=100)

#     def _str_(self):
#         return self.address


class googleMaps(models.Model): 
    address = map_fields.AddressField(max_length=200)
    geolocation = map_fields.GeoLocationField(max_length=100)

    def map_address(self):
        return self.address

    def map_geolocation(self): 
        return self.geolocation