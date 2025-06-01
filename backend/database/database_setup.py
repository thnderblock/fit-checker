from datetime import datetime
from hashlib import sha256
from pymongo import MongoClient
import database_name as dbname
import base64
import helper as h
# users data
client = MongoClient('localhost', 27017) 
if client[dbname.DB_NAME] is not None:
    client.drop_database(dbname.DB_NAME)
fitchecker_db = client[dbname.DB_NAME]

all_users = fitchecker_db.all_users
all_clothes = fitchecker_db.all_clothes
all_messages = fitchecker_db.all_messages

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

user_data2=  {
    "email" : "thnderblock@gmail.com",
    "username" : "thnderblock",
    "first_name" : "Nick",
    "last_name" :  "Tong",
    "password" : sha256(("Thnderblock1!").encode('utf-8')).hexdigest(),
    "profile_picture" : '',
    "role": "user",
    "date_joined": datetime(2025,2,18),
}

all_users.insert_many([admin_data1, user_data1,user_data2])

#clothes data
clothes_data1 =  {
    "type" : "t-shirt",
    "image" : h.convert_image_to_base64('./images/IMG_2101.jpg'),
    "username" : "angus41014",
    "description" : 'white graphic shirt',
    "date_joined": datetime(2025,1,3),
}

clothes_data2 = {
    "type" : "pants",
    "image" : h.convert_image_to_base64('./images/IMG_2102.jpg'),
    "username" : "angus41014",
    "description" : 'black jeans',
    "date_joined": datetime(2025,1,3),
}

clothes_data3 =  {
    "type" : "jacket",
    "image" : h.convert_image_to_base64('./images/IMG_2107.jpg'),
    "username" : "angus41014",
    "description" : "hoodie",
    "date_joined": datetime(2025,1,3),
}

clothes_data4 =  {
    "type" : "t-shirt",
    "image" : h.convert_image_to_base64('./images/IMG_2105.jpg'),
    "username" : "angus41014",
    "description" : 'black shirt',
    "date_joined": datetime(2025,1,3),
} 

clothes_data5 =  {
    "type" : "pants",
    "image" : h.convert_image_to_base64('./images/IMG_2103.jpg'),
    "username" : "angus41014",
    "description" : 'blue baggy jeans',
    "date_joined": datetime(2025,1,3),
} 

clothes_data6 =  {
    "type" : "pants",
    "image" : h.convert_image_to_base64('./images/IMG_2104.jpg'),
    "username" : "angus41014",
    "description" : 'white pants',
    "date_joined": datetime(2025,1,3),
} 

clothes_data7 =  {
    "type" : "shirt",
    "image" : h.convert_image_to_base64('./images/IMG_2099.jpg'),
    "username" : "angus41014",
    "description" : 'white business shirt',
    "date_joined": datetime(2025,1,3),
} 

all_clothes.insert_many([clothes_data1, clothes_data2,clothes_data3, clothes_data4, clothes_data5, clothes_data6, clothes_data7])


message_data1 = {
    "username" : "angus41014",
    "message" : "testing message function",
    "date" : datetime(2025,1,3),
}
message_data2 = {
    "username" : "angus41014",
    "message" : "testing again",
    "date" : datetime(2025,1,4),
}

all_messages.insert_many([message_data1, message_data2])

print("setup successful!")