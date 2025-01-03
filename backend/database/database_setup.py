from datetime import datetime
from hashlib import sha256
from pymongo import MongoClient
# users data
admin_data1 = {
    "email" : "admin@gmail.com",
    "username" : "Admin",
    "first_name" : "Fit",
    "last_name" :  "Checker",
    "password" : sha256(("Adm1n!").encode('utf-8').hexdigest()),
    "role": "admin",
    "date_joined": datetime(2025,1,1),
}

user_data1 =  {
    "email" : "angus41014@gmail.com",
    "username" : "angus41014",
    "first_name" : "Angus",
    "last_name" :  "Chao",
    "password" : sha256(("Angus110011@").encode('utf-8').hexdigest()),
    "role": "user",
    "date_joined": datetime(2025,1,3),
}

#clothes data
