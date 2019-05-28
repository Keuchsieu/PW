const express = require('express');
const path = require('path')
// incase VM cannot use port 8000
const port = process.env.PORT || 8000;

const app = express();
// public dir
const publicPath = path.join(__dirname, '/public');

// setup static folder using middleware
app.use(express.static(publicPath));

app.get('/', (req, res)=>{
    res.send(__dirname + "/public/index.html");
});

const server = app.listen(port, ()=>{
    console.log("Listening on port " + port);
});