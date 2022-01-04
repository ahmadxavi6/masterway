from flask import Flask, json, request, jsonify , Response
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/masterway'
mongo = PyMongo(app)

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


if __name__ == '__main__':
    app.run(debug=True)