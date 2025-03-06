# from database import queries
# from datetime import datetime
# from pymongo import MongoClient
# from database import database_name as dbname
from database import user_function
import mongomock
client = mongomock.MongoClient()
test_database = client["test_database"]

print("jjjk")

# def test_chatgpt():
mess =  {"Outfit ideas for casual dinner"}
username = "angus41014"
print("hi")
print(user_function.fit_ask(mess,username))

# if __name__ == "test_chatgpt":
#     test_chatgpt()


# def test_users_update():
#     test_admin_data1 = {
#         "email" : "somehting@gmail.com",
#         "username" : "something",
#         "first_name" : "something",
#         "last_name" :  "something",
#         "password" : "something",
#         "profile_picture" : '',
#         "role": "admin",
#         "date_joined": datetime(2025,1,1),
#     }

#     test_user_data1 = {
#         "email" : "somehting@gmail.com",
#         "username" : "something",
#         "first_name" : "something",
#         "last_name" :  "something",
#         "password" : "something",
#         "profile_picture" : '',
#         "role": "user",
#         "date_joined": datetime(2025,1,1),
#     }
#     test_database.all_users.insert_many([test_admin_data1, test_user_data1])

#     result = queries.get_all_users()

#     assert isinstance(result, list)
#     print("works")
#     test_database.all_collectables.drop()