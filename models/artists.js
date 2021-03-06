const ObjectID = require('mongodb').ObjectID;
const db = require('../db');

exports.all = cb => {
	db.get()
		.collection('artists')
		.find()
		.toArray((err, result) => cb(err, result));
};

exports.create = (artist, cb) => {
	db.get()
		.collection('artists')
		.insert(artist, cb);
}

exports.read = (id, cb) => {
	db.get()
		.collection('artists')
		.findOne({ _id: ObjectID(id) }, (err, result) => cb(err, result));	
};

exports.update = (id, newData, cb) => {
	db.get()
		.collection('artists')
		.updateOne({ _id: ObjectID(id) }, newData, (err, result) => cb(err, result));	
};

exports.delete = (id, cb) => {
	db.get()
		.collection('artists')
		.deleteOne({ _id: ObjectID(id) }, (err, result) => cb(err, result));	
};
