const express = require('express');
const { MongoClient } = require('mongodb');

const config = require('./config');

const app = express();

app.set('view engine', 'pug');

app.listen(config.port, () => console.log(`App running at ${config.port}`));

MongoClient.connect(config.connectionString)
    .then((db) => {
        app.get('/', (req, res) => {
            db.collection('items')
                .find()
                .toArray()
                .then((items) => {
                    res.render('home', {
                        context: items,
                    });
                });
        });
    });
