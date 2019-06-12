const express = require('express');
const path = require('path');
const Sudoku = require('./backend/sudoku');
// incase VM cannot use port 8000
const port = process.env.PORT || 8000;

const app = express();
// public dir
const publicPath = path.join(__dirname, '/public');

// setup static folder using middleware
app.use(express.static(publicPath));

// setup body parser
app.use(express.urlencoded());
app.use(express.json());

app.get('', (req, res)=>{
    res.send(__dirname + "/public/index.html");
});

app.get('/sudoku',(req, res)=>{
    res.redirect("/sudoku.html");
})

app.post('/api/solvesudoku/v1.0', (req, res)=>{
    console.log(req.body.board);
    var board = req.body.board;
    var solver = new Sudoku(board);
    solver.solve()
    res.send(solver.solution);
});

app.get('/solvesudoku', (req, res)=>{
    var rst = Sudoku(req);
    console.log(rst);
    res.send(rst);
});

const server = app.listen(port, ()=>{
    console.log("Listening on port " + port);
});