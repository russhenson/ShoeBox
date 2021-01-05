const express = require('express');
const app = express();
const port = 9090;

app.get('/', function(req,res){
    res.send('Hello World!');
})

app.listen(port, function(){
    console.log(`App listening at port` + port);
})