from flask import Flask, json, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/masterway'
mongo = PyMongo(app)

CORS(app)

db = mongo.db.workers

@app.route('/workers', methods=['POST'])
def createWorker():
    id = db.insert({
        'name': request.json['name'],
        'email': request.json['email'],
        'phoneNumber': request.json['phoneNumber'],
        'age': request.json['age']
    })
    return jsonify({'id': str(ObjectId(id)), 'msg': "User Added Successfully"})

@app.route('/workers', methods=['GET'])
def getWorkers():
    workers = []
    for doc in db.find():
        workers.append({
            '_id': str(ObjectId(doc['_id'])),
            # 'name': doc['name'],
            'email': doc['email'],
            'phoneNumber': doc['phoneNumber'],
            'age': doc['age'],
        })
    return jsonify(workers)


@app.route('/workers/<id>', methods=['GET'])
def getWorker(id):
    worker = db.find_one({'_id': ObjectId(id)})
    return jsonify({
            '_id': str(ObjectId(worker['_id'])),
            'name': worker['name'],
            'email': worker['email'],
            'phoneNumber': worker['phoneNumber'],
            'age': worker['age'],
    })

@app.route('/workers/<id>', methods=['DELETE'])
def deleteWorker(id):
    db.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': "Worker Deleted Successfully"})


@app.route('/workers/<id>', methods=['PUT'])
def updateWorker(id):
    db.update_one({'_id': ObjectId(id)}, {'$set': {
         'name': request.json['name'],
         'email': request.json['email'],
         'phoneNumber': request.json['phoneNumber'],
         'age': request.json['age']
    }})
    return jsonify({'msg': "Worker Update Successfully"})


if __name__ == '__main__':
    app.run(debug=True)