from flask import Flask, json, request, jsonify , Response,session
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from passlib.hash import pbkdf2_sha256
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

app = Flask(__name__)
app.secret_key="oS\xf8\xf4\xe2\xc8\xda\xe3\x7f\xc75*\x83\xb1\x06\x8c\x85\xa4\xa7piE\xd6I"
app.config['MONGO_URI']='mongodb://localhost/masterway'
mongo = PyMongo(app)
app.config["JWT_SECRET_KEY"] = "dfg54dfg4564gd56g4er8cdv2cb8f5/456cd5=-54xcvrt7"  # Change this!
jwt = JWTManager(app)
CORS(app)
dbW = mongo.db.workers
dbV = mongo.db.vehicles
dbA = mongo.db.admins

##########################
@app.route('/workers', methods=['POST'])
def addWorker():
    id = dbW.insert_one({
        'fName': request.json['fName'],
        'email': request.json['email'],
        'phoneNumber': request.json['phoneNumber'],
        'age': request.json['age']
    })
    return jsonify({'id': f"{id.inserted_id}", 'msg': "User Added Successfully"})

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
            'phoneNumber': worker['phoneNumber'],
            'age': worker['age'],
    })
##########################
@app.route('/workers/profile/<id>', methods=['GET'])
def getWorkerProfile(id):
    worker = dbW.find_one({'_id': ObjectId(id)})
    return jsonify({
            '_id': str(ObjectId(worker['_id'])),
            'fName': worker['fName'],
            'email': worker['email'],
            'phoneNumber': worker['phoneNumber'],
            'age': worker['age'],
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
##########################
@app.route('/', methods=['POST'])
def addAdmin():
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
@app.route('/admins', methods=['POST'])
def login():
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
    
    
    
if __name__ == '__main__':
    app.run(debug=True)