
from string import ascii_letters
from flask import  request, jsonify,Blueprint ,url_for
from flask_pymongo import ObjectId
from passlib.hash import pbkdf2_sha256
from apis.database import mongo
from flask_jwt_extended import create_access_token
from apis.mails import mail
from flask_mail import Message


api_admin = Blueprint('api_admin',__name__)
##########################
@api_admin.route("/forgetmypass",methods=["PATCH"])
def index():
  dbA = mongo.db.admins
  admin ={
        'email': request.json['email'],
    }
  user = dbA.find_one({"email": admin['email']})
  
  if dbA.find_one({"email": admin['email']}):
    email = user['email']
    name = user['fName']
    id = str(ObjectId(user['_id']))
    msg = Message('Master Way Password Reset Request', sender =   'ahmadxavi61@gmail.com', recipients = [email] )
    msg.body = "Hey" + " " + name  +",to reset your password, visit the following link"+"\r\n"+"localhost:3000/resetpassword/"+id
    mail.send(msg)
    return "Message sent!"
  return "No Such email in the data base" 
##########################
@api_admin.route('/', methods=['POST'])
def addAdmin():
    dbA = mongo.db.admins

    admin ={
        'fName': request.json['fName'],
        'email': request.json['email'],
        'password':pbkdf2_sha256.hash(request.json['password']),

    }
    if dbA.find_one({"email":request.json['email']}):
        return jsonify({"Msg":"Email address already in use"})
    dbA.insert_one(admin)
    return jsonify({'msg': "Admin Added Successfully"})

##########################
@api_admin.route('/admins', methods=['POST'])
def login():
    
    dbA = mongo.db.admins
    admin = {
        "email":request.json['email'],
        "password":request.json['password']
    }
 
    user =  dbA.find_one({"email":admin['email']}) 
    if user and pbkdf2_sha256.verify(admin["password"], user['password']):
        access_token = create_access_token(identity=user['email'])
        access = {
        "email":user['email'],
        "token":access_token,
        "fName":user['fName']
        }
        return jsonify(access),200
        
    return jsonify("wrong email or wrong password"),401

########################## 
@api_admin.route('/resetpassword/<id>', methods=['POST'])
def reset(id):
    dbA = mongo.db.admins
    dbA.update_one({'_id': ObjectId(id)}, {'$set': {
         
        'password': pbkdf2_sha256.hash(request.json['password']),
    }})
    return jsonify({'msg': "Password Updated Successfully"})
 
