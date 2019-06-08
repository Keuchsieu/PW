const express = require('express');
const path = require('path')
const Sudoku = require('./backend/sudoku');
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

app.post('/solvesudoku', (req, res)=>{
    var rst = Sudoku(req);
    console.log(rst);
    res.send(rst);
});

app.get('/solvesudoku', (req, res)=>{
    var rst = Sudoku(req);
    console.log(rst);
    res.send(rst);
});

const server = app.listen(port, ()=>{
    console.log("Listening on port " + port);
});