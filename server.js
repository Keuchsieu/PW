var express = require('express');
var path = require('path')
// backend node js script
const port = process.env.PORT || 8000;
// 
var app = express();
// middleware that put public folder's content onto server
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

var server = app.listen(port, ()=>{
    console.log("Listening on port " + port);
});