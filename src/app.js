const express = require('express')
const bodyParser = require("body-parser")




const app = express()
const port = 3000


  

// body parser
const jsonParser = bodyParser.json()


// needed when localhost:1234 is running
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req, res) => res.send('Hello World! xxx'))


// test post request.
app.post('/test',jsonParser,(req, res) => {
    console.log('req.body: ',req.body);
    res.end(JSON.stringify(req.body));
});









app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))