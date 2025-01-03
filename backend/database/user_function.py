from flask import jsonify, request, Response
from pymongo import MongoClient
import helper as h
import json

def register(user):
    if h.get_user_email(request.json.get("email")):
        response_body = {"status_message" : "Email already in use"}
        return Response(json.dumps(response_body), status=400, mimetype = "application/json")
    if h.get_user_username(request.json.get("username")): 
        response_body = {"status_message" : "username already in use"}
        return Response(json.dumps(response_body), status=400, mimetype = "application/json")
    password = user['password']
    #  checking passwrod requirements
    if not 
