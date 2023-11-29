const express = require('express');
const app = express();

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
});
app.use(express.json({limit: '1mb'}));
app.use(express.static('public'));

app.post('/api', (request, response) => {
    console.log('I got a request!')
    console.log()
    console.log(request.body);
})

