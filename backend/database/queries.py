# this is used to find all data that exist in the data base
from pymongo import MongoClient
from database import database_name as dbname
from bson import ObjectId

client = MongoClient('localhost', 27017)
db = client[dbname.DB_NAME]

# find all users
def get_all_users(db=db) -> list:
    return list(db.all_users.find())
# insert users to database
def insert_user(user, db=db)->list:
    all_users = db.all_users
    all_users.insert_one(user)
# insert clothes to database
def insert_clothes(cloth, db=db)->list:
    all_clothes = db.all_clothes
    all_clothes.insert_one(cloth)