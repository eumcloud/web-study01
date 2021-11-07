//서버용 모듈 불러오기
var http = require('http');
var express = require('express');
var path = require('path');

var morgan = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var app = express();


//모듈적용 & 접속포트 3000
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set("view engine", "ejs");
    
    //페이지 외부 js,css 로드하기
    app.use('/assets', express.static(__dirname + "/assets"));
    
    // app.use(express.logger('dev')); 나중에 morgan 사용할때 활성화
    app.use(express.bodyParser()); //입력정보 파싱
    app.use(methodOverride());
    
    app.use(session({ resave: true,//세션사용
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(multer());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    
    app.engine('ejs', engine);




//기본 접속부터 페이지응답 Router 세팅
app.get('/', (req, res)=>{ //기본 접속시 mainpage 로드
   res.sendFile(__dirname + '/pages/jc/mainpage.html')});
app.get('/taesu', (req, res)=>{ //기본 접속시 mainpage 로드
   res.sendFile(__dirname + '/pages/ts/index.html')});

    //아래는 테스트페이지 라우팅
app.get('/users', (req, res)=>{res.end(`<h1>${users}</h1>`);});
app.use('/pages', express.static(__dirname + "/pages/"));
app.get('/board', (req, res)=>{res.sendFile(__dirname + '/pages/zl/boardlist.html')
         //board 인클루딩
         res.render('boardheader.ejs', {name: 'User'}); });

    //그외 모든 접근경로는 원툴응답
app.get('*', (req, res)=>{res.write("<script>alert('잘못된 경로입니다.')</script>");});



var server = http.createServer(app);
    server.listen(app.get('port'), ()=>{
    console.log("exress server listening on port " + app.get('port'));
})





