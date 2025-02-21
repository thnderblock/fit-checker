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
            "date_joined": datetime.now(),
            "role" : "user"
        }
    return user_function().register(new_user)

if __name__ == '__main__':
    app.run(debug =True)
    