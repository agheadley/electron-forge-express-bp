const express = require('express')
const bodyParser = require("body-parser")


const electron = require('electron');
const path = require('path');
const fs = require('fs');

const app = express()
const port = 3000

// electron userData path
// https://cameronnokes.com/blog/how-to-store-user-data-in-electron/

const userDataPath = (electron.app || electron.remote.app).getPath('userData');
  
console.log(userDataPath);

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
    let out={response:"success",body:req.body};
    console.log(out);
    res.end(JSON.stringify(out));
});

// test post request.
app.post('/generateDownload',jsonParser,(req, res) => {
    console.log('req.body: ',req.body);
    
    fs.writeFile(userDataPath+'/out.csv',req.body.data, function (err) {
        if (err) {
            console.log(err);
            res.end(JSON.stringify({response:"ERROR"}));
        } else {
            console.log(userDataPath+'/out.csv written');
            res.end(JSON.stringify({response:"SUCCESS"}));
        }
        
    });
});


app.get('/download', function (req, res) {
    res.download(userDataPath+'/out.csv', function (err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("Success");
        }
    });
});





app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))