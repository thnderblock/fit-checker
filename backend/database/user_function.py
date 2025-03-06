from flask import jsonify, request, Response
from pymongo import MongoClient
from database import helper as h
import json
from hashlib import sha256
from bson import json_util
from database import queries
from openai import OpenAI
import os
import pandas as pd
import time
import datetime
api_key = ""

def register(self, user):
    if h.get_user_email(request.json.get("email")):
        response_body = {"status_message" : "Email already in use"}
        return Response(json.dumps(response_body), status=400, mimetype = "application/json")
    if h.get_user_username(request.json.get("username")): 
        response_body = {"status_message" : "username already in use"}
        return Response(json.dumps(response_body), status=400, mimetype = "application/json")
    password = user['password']
    #  checking passwrod requirements
    if not self.password_requirement(password): 
        response_body = {"status_message": "bad password"}
        return Response(json.dumps(response_body), status=400, mimetype='application/json')
    user['password'] = self.encrypt_password(user,password)
    return self.create_account(user)

def create_account(user):
    queries.insert_user(user)
    response_body = {"username": user["username"]}
    return Response(json_util.dumps(response_body), status=200, mimetype='application/json')

# password helper
def password_requirement(self,password):
    upper = any(elements.isupper() for elements in password)
    digit = any(elements.isdigit() for elements in password)
    if len(password ) < 8:
        response_body = {"status_message": "password too short"}
        return Response(json.dumps(response_body), status=400, mimetype='application/json')
    return upper & digit
    
def encrypt_password(self,user,password):
    hash_object = sha256(password.encode('utf-8')).hexdigest()
    new_password = str(hash_object)
    return new_password

def login(self, email, password):
    user =  h.get_user_email(email)
    if not user or user["password"] != sha256(password.encode('utf-8')).hexdigest():
        return Response("Error: Incorrect email or password", status=400, mimetype='application/json')
    response_body = {"username": user["username"]}
    return Response(json.dumps(response_body), status=200, mimetype='application/json')

# register clothes
def regitster_clothes(self,clothes):
    # checking clothes and types
    queries.insert_clothes(clothes)
    response_body = {"type": clothes["type"]}
    return Response(json_util.dumps(response_body), status=200, mimetype='application/json')

# asking for fit ideas
def fit_ask(mess,username,):
    client = OpenAI(
        api_key=api_key
    )
    
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        store=True,
        messages= [ 
            {
                "role" : "user",
                "content" : mess,
            }
            
        ],
        
    )
    user = h.get_user_username(username)
    print("this is")
    print(response)
    message = {
        "username": user["username"],
        "message": str(response.choices[0].message),
        "date": datetime.now()
    }
    response_body = message
    queries.insert_message(message)
    return Response(json_util.dumps(response_body), status=200, mimetype='application/json')

