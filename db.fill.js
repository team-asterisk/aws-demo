const { MongoClient } = require('mongodb');

const config = require('./config');

const items = [
    { text: 'Item 1' },
    { text: 'Dog' },
    { text: 'Random' },
];

let db = null;

console.log('Seeding database!!!!');

MongoClient.connect(config.connectionString)
    .then((_db) => {
        db = _db;
        db.collection('items')
            .insertMany(items);
    })
    .then(() => {
        return db.close();
    })
    .then(() => {
        console.log('Database Ready!!!!');
    });

