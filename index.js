const express = require('express');
const app = express();
const Datastore = require('nedb');

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
});
app.use(express.json({limit: '1mb'}));
app.use(express.static('public'));

const myDatabase = new Datastore('database.db');
myDatabase.loadDatabase();

app.post('/api', (request, response) => {
    console.log('I got a request!')
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;

    myDatabase.insert(data);
    console.log(myDatabase);
    response.json({
        status: 'success',
        timestamp: timestamp,
        latitude: data.lat, 
        longitude: data.lon
    })

    console.log(myDatabase)
})