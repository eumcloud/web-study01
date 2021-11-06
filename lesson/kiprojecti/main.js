var express = require('express');
var app = express();
const users = ['Tom', 'Andy', 'Jessica', 'Paul'];

app.get('/', (req, res)=>{
   res.sendFile(__dirname + '/index.html')
});

app.get('/users', (req, res)=>{res.end(`<h1>${users}</h1>`);});
app.get('/second.html', (req, res)=>{res.sendFile(__dirname + '/pages/second.html')});
app.get('/users:id', (req, res)=>{
    const userName = users[request.params.id -1];
    res.end(`<h1>${userName}</h1>`);
});
app.get('*', (req, res)=>{res.write("<script>alert('잘못된 경로입니다.')</script>");});

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("Example app listening at http://%s:%s", host, port);
});
console.log('Server Start');





