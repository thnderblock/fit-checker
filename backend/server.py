from flask import Flask, request, Response
from database import user_function
from datetime import datetime 
from database import helper as h
import json

app = Flask(__name__)

from flask_cors import CORS
CORS(app)

@app.route("/user/register" , methods = ["POST"])
def register_user():
    new_user =  {
            "email" : str(request.json.get('email')),
            "username" :str(request.json.get('username')),
            "first_name" :str(request.json.get('first_name')),
            "last_name" :str(request.json.get('last_name')),
            "password" :str(request.json.get('password')),
            "profile_picture" : '',
            "date_joined": datetime.now(),
            "role" : "user"
        }
    return user_function().register(new_user)

# user profile
@app.route("/user/<username>/profile" , methods=["PUT"])
def profile(username):
# 3 fits they chose
# all clothes uploaded
# chat gpt
    user_token = request.headers.get('Authorization')
    user = h.get_user_username(user_token)
    if user == None:
        response_body = {"status_message": "invalid token"}
        return Response(json.dumps(response_body), status=400, mimetype='application/json')
    user_clothes = h.get_clothes_username(user)
    response_body = {"user_clothes": user_clothes}
    return Response(json.dumps(response_body), status = 200, mimetype='application/json')

# user closet
@app.route("/user/<username>/register_clothes" , methods=["POST"])
def register_clothes(username):
    new_clothes  = {
        "type" : str(request.json.get('email')),
        "image" :str(request.json.get('image')),
        "description" : str(request.json.get('description')),
        # username part to get from the url
        "username" :str(username),
        "date_joined": datetime.now()
    }

    print(str(request.json.get('image')))
    return user_function.register_clothes(new_clothes)

@app.route("/user/login", methods=["POST"])
def login():
    email =  request.json.get('email')
    password = request.json.get('password')
    return user_function.login(email, password)

#chosing outfit (powered chatgpt)
@app.route("/user/<username>/fit_ask" , methods=['POST'])
def fit_ask(username):
    message = {
        "message": str(request.json.get('message'))
    }

    user_token = request.headers.get('Authorization')
    user = h.get_user_username(user_token)
    if user == None:
        response_body = {"status_message": "invalid token"}
        return Response(json.dumps(response_body), status=400, mimetype='application/json')
    user_clothes = h.get_clothes_username(user["username"])
    user_message  = "you are a expert fashion AI that will recommend users stylish clothes, only use the clothes that are given to you, here are all the user's clothes" 
    user_message = user_message + str(user_clothes) + 'for each style that you have, present your output as [StyleName][Clothes1,Clothes2...]'
    message["message"] += user_message

    return user_function.fit_ask(message,username)

@app.route("/user/<username>/get_all_clothes" , methods=['POST'])
def get_all_clothes(username):
    user_token = request.headers.get('Authorization')
    user = h.get_user_username(user_token)
    if user == None:
        response_body = {"status_message": "invalid token"}
        return Response(json.dumps(response_body), status=400, mimetype='application/json')
    user_clothes = h.get_clothes_username_full(user["username"])
    return user_clothes

if __name__ == '__main__':
    app.run(debug =True)
    