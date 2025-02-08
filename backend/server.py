from flask import Flask, request
from database import user_function
import datetime
app = Flask(__name__)

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
# #user profile
# @app.route("/user/<username>/profile" , methods=["PUT"])
# def profile(username):
# 3 fits they chose
# all clothes uploaded
# general rec, casual or business
# chat gpt

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
    return user_function().register_clothes(new_clothes)

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
    return user_function().fit_ask(message,username)


@app.route("/user/<username>/fit_idea" , method=['POST'])
def fit_idea(username):
    return user_function.fit_idea()


if __name__ == '__main__':
    app.run(debug =True)
    