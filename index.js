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
myDatabase.insert('abhinav mishra database hello');
myDatabase.insert({abhinav: 'yes'})


app.post('/api', (request, response) => {
    console.log('I got a request!')
    console.log(request.body);

    databaseArray.push(request.body);

    response.json({
        status: 'success',
        latitude: request.body.lat, 
        longitude: request.body.lon,
        database: databaseArray,
        length: databaseArray.length
    })

    console.log(databaseArray)
})