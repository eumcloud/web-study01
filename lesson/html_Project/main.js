//모듈 가져오기
const express = require('express');
const app = express();

const fs = require('fileread');
const paht = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const session = require('express-session');
const fileStore = require('session-file-store');
const cookieParser = require('cookie-parser');

const mysql = require('mysql');
const sequelize = require('sequelize');
const morgan = require('morgan');


//사용할 내용
app.set('view-engine', 'ejs');
app.set('views', __dirname + "./pages");

//라우터

//서버포트 리스닝