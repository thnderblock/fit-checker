from datetime import datetime
from hashlib import sha256
from pymongo import MongoClient
import database_name as dbname
import base64
# users data
client = MongoClient('localhost', 27017) 
if client[dbname.DB_NAME] is not None:
    client.drop_database(dbname.DB_NAME)
fitchecker_db = client[dbname.DB_NAME]

all_users = fitchecker_db.all_users
all_clothes = fitchecker_db.all_clothes

admin_data1 = {
    "email" : "admin@gmail.com",
    "username" : "Admin",
    "first_name" : "Fit",
    "last_name" :  "Checker",
    "password" : sha256(("Adm1n!").encode('utf-8')).hexdigest(),
    "profile_picture" : '',
    "role": "admin",
    "date_joined": datetime(2025,1,1),
}

user_data1 =  {
    "email" : "angus41014@gmail.com",
    "username" : "angus41014",
    "first_name" : "Angus",
    "last_name" :  "Chao",
    "password" : sha256(("Angus110011@").encode('utf-8')).hexdigest(),
    "profile_picture" : '',
    "role": "user",
    "date_joined": datetime(2025,1,3),
}
all_users.insert_many([admin_data1, user_data1])

#clothes data
clothes_data1 =  {
    "type" : "t-shirt",
    "image" : '',
    "username" : "angus41014",
    "description" : 'white shirt',
    "date_joined": datetime(2025,1,3),
}

clothes_data2 = {
    "type" : "pants",
    "image" : '',
    "username" : "angus41014",
    "description" : 'blue jeans',
    "date_joined": datetime(2025,1,3),
}

clothes_data3 =  {
    "type" : "jacket",
    "image" : '',
    "username" : "angus41014",
    "description" : "hoodie",
    "date_joined": datetime(2025,1,3),
}

all_clothes.insert_many([clothes_data1, clothes_data2,clothes_data3])
print("setup successful!")