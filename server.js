const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const twit = require('twit');
const config = require('./config.js');

const Twitter = new twit(config);

app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

let params = {
    q: '#yugioh',
    result_type: 'recent',
    lang: 'en'
}

Twitter.get('search/tweets', params, function (err, data) {

    let newData = JSON.stringify(data);
    fs.writeFile('frontend/static/data/tweet.json', newData, err => {
        if (err) throw err;
        console.log('Success');
    })
})

app.get('/Twitter', function (req, res) {
    fs.readFile( __dirname + "/" + "frontend/static/data/tweet.json", 'utf8', function (err, data) {
        res.end( data );
    });
});

const server = app.listen(process.env.PORT, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})
