from apis.database import mongo
from flask import Flask, json, request, jsonify , Response,session
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from passlib.hash import pbkdf2_sha256
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from apis.admins import api_admin
from flask_mail import Mail ,Message
from apis.mails import mail

app = Flask(__name__)
app.register_blueprint(api_admin)
app.secret_key="oS\xf8\xf4\xe2\xc8\xda\xe3\x7f\xc75*\x83\xb1\x06\x8c\x85\xa4\xa7piE\xd6I"
app.config['MONGO_URI']='mongodb://localhost/masterway'
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'masterway.eliaatours@gmail.com'
app.config['MAIL_PASSWORD'] = '123456789-aA'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mongo.init_app(app)
mail.init_app(app)
app.config["JWT_SECRET_KEY"] = "dfg54dfg4564gd56g4er8cdv2cb8f5/456cd5=-54xcvrt7"  # Change this!
jwt = JWTManager(app)

CORS(app)
dbW = mongo.db.workers
dbV = mongo.db.vehicles

##########################
@app.route('/workers', methods=['POST'])
def addWorker():
    id = dbW.insert_one({
        'fName': request.json['fName'],
        'email': request.json['email'],
        'phoneNumber': request.json['phoneNumber'],
        'age': request.json['age'],
        'ID':request.json['ID'],
        'password':pbkdf2_sha256.hash(request.json['ID']),
        'requestShift':{'Sun':"", 'Mon':"", 'Tue':"",'Wed':"",'Thur':"",'Fri':""},
        "weekShifts":{'Sun':{'hours':"",'info':""},
        'Mon':{'hours':"",'info':""},
        'Tue':{'hours':"",'info':""},
        'Wed':{'hours':"",'info':""},
        'Thur':{'hours':"",'info':""},
        'Fri':{'hours':"",'info':""},
        'Sat':{'hours':"",'info':""}}
    })
    return jsonify({'id': f"{id.inserted_id}", 'msg': "User Added Successfully"})
    
##########################
@app.route('/trips/<id>', methods=['PUT'])
def addShifts(id):
    dbW.update_one({'_id': ObjectId(id)}, {'$set': {
        "weekShifts":{'Sun':{'hours':request.json['Sunday'],'info':request.json['Sun']},
        'Mon':{'hours':request.json['Monday'],'info':request.json['Mon']},
        'Tue':{'hours':request.json['Tuesday'],'info':request.json['Tue']},
        'Wed':{'hours':request.json['Wednesday'],'info':request.json['Wed']},
        'Thur':{'hours':request.json['Thursday'],'info':request.json['Thur']},
        'Fri':{'hours':request.json['Friday'],'info':request.json['Fri']},
        'Sat':{'hours':request.json['Saturday'],'info':request.json['Sat']}}
    }})
    return jsonify({'msg': "Shifts Added Successfully"})
   
##########################
@app.route('/trips/<id>', methods=['PATCH'])
def removeShift(id):
    dbW.update_one({'_id': ObjectId(id)}, {'$set': {
       "weekShifts":{'Sun':{'hours':"",'info':""},
        'Mon':{'hours':"",'info':""},
        'Tue':{'hours':"",'info':""},
        'Wed':{'hours':"",'info':""},
        'Thur':{'hours':"",'info':""},
        'Fri':{'hours':"",'info':""},
        'Sat':{'hours':"",'info':""}}
    }})
    return jsonify({'msg': "Shifts Added Successfully"})

##########################

@app.route('/workers', methods=['GET'])
def getWorkers():
    workers = []
    for doc in dbW.find():
        workers.append({
            '_id': str(ObjectId(doc['_id'])),
            'fName': doc['fName'],
            'email': doc['email'],
            'phoneNumber': doc['phoneNumber'],
            'age': doc['age'],
            "ID":doc['ID'],
            'requesteShift':doc['requestShift'],
            'weekShifts':doc['weekShifts']
        })
    return jsonify(workers)

##########################

@app.route('/workers/<id>', methods=['GET'])
def getWorker(id):
    worker = dbW.find_one({'_id': ObjectId(id)})
    return jsonify({
            '_id': str(ObjectId(worker['_id'])),
            'fName': worker['fName'],
            'email': worker['email'],
            "ID":worker['ID'],
            'phoneNumber': worker['phoneNumber'],
            'age': worker['age'],
            'requesteShift':worker['requestShift'],
            'weekShifts':worker['weekShifts']
    })
##########################
@app.route('/workers/profile/<id>', methods=['GET'])
def getWorkerProfile(id):
    worker = dbW.find_one({'_id': ObjectId(id)})
    return jsonify({
            '_id': str(ObjectId(worker['_id'])),
            'fName': worker['fName'],
            'email': worker['email'],
            "ID":worker['ID'],
            'phoneNumber': worker['phoneNumber'],
            'age': worker['age'],
            'requesteShift':worker['requestShift'],
            'weekShifts':worker['weekShifts']
    })
##########################

@app.route('/workers/<id>', methods=['DELETE'])
def deleteWorker(id):
    dbW.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': "Worker Deleted Successfully"})

##########################

@app.route('/workers/<id>', methods=['PUT'])
def updateWorker(id):
    dbW.update_one({'_id': ObjectId(id)}, {'$set': {
         'fName': request.json['fName'],
         'email': request.json['email'],
         'phoneNumber': request.json['phoneNumber'],
         'age': request.json['age']
    }})
    return jsonify({'msg': "Worker Update Successfully"})

#######################################
@app.route('/vehicles', methods=['POST'])
def addVechicles():
    id = dbV.insert_one({
        'type': request.json['type'],
        'model': request.json['model'],
        'year': request.json['year'],
    })
    return jsonify({'id': f"{id.inserted_id}", 'msg': "Vehicle Added Successfully"})    
#######################################
@app.route('/vehicles', methods=['GET'])
def getVehicles():
    vehicles = []
    for doc in dbV.find():
        vehicles.append({
            '_id': str(ObjectId(doc['_id'])),
            'type': doc['type'],
            'model': doc['model'],
            'year': doc['year'],
        })
    return jsonify(vehicles)
#######################################
@app.route('/vehicles/<id>', methods=['GET'])
def getVehicle(id):
    vehicle = dbV.find_one({'_id': ObjectId(id)})
    return jsonify({
            '_id': str(ObjectId(vehicle['_id'])),
            'type': vehicle['type'],
            'model': vehicle['model'],
            'year': vehicle['year'],
    })
##########################
@app.route('/vehicles/<id>', methods=['DELETE'])
def deleteVehicle(id):
    dbV.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': "Vehicle Deleted Successfully"})

##########################
@app.route('/vehicles/<id>', methods=['PUT'])
def updateVehicle(id):
    dbV.update_one({'_id': ObjectId(id)}, {'$set': {
         'type': request.json['type'],
         'model': request.json['model'],
         'year': request.json['year']
    }})
    return jsonify({'msg': "Vehicle Update Successfully"})
######################################
@app.route('/mobapp', methods=['POST'])
def login():
    worker = {
        "email":request.json['email'],
        "password":request.json['password']
    }
 
    user =  dbW.find_one({"email":worker['email']}) 
    if user and pbkdf2_sha256.verify(worker["password"], user['password']):
        access_token = create_access_token(identity=user['email'])
        access = {
        "email":user['email'],
        "token":access_token,
        "fName":user['fName']
        }
        return jsonify(access),200
        
    return jsonify("wrong email or wrong password"),401    

    
    
if __name__ == '__main__':
    app.run(host="192.168.56.1", port=5000,debug=True)