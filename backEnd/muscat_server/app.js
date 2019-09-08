const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require( 'body-parser');

const morgan       = require("morgan");
const cors = require( 'cors');
const AuthRoutes = require( './routes/auth/index');
const BlogRoutes = require( './routes/blog/index');
const NotiRoutes = require( './routes/noti/index');
const UserRoutes = require( './routes/user/index');
const Sequelize = require('sequelize');

// const SequelizeAuto = require('sequelize-auto');
// const auto = new SequelizeAuto('muscat', 'root', '134679', {
//   host:'127.0.0.1',
//   port:'3306'
// });
// auto.run((err)=>{
//   if(err) throw err;
// });

// ENV
require('dotenv').config();

const app = express();
app.use(morgan("dev")); // 모든 요청을 console에 기록
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(session({
  secret: 'keyboard cat',  // 암호화
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}));
app.use(cors());
const port = process.env.PORT || 4500;

app.listen(port, function(){
    console.log("Express Server has Started on port "+port)
});



//app.use('/'     ,AuthRoutes);
//app.use('/user' ,UserRoutes);
app.use('/api/blog', BlogRoutes);
//app.use('/noti' ,NotiRoutes);
