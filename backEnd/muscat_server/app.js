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
// const auto = new SequelizeAuto('heroku_9e07b0470cfcf6a', 'bc3a50d92f87f3', 'b09b0e1a', {
//   host:'us-cdbr-iron-east-02.cleardb.net',
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

app.use('/api/user'     ,AuthRoutes);
app.use('/api/blog', BlogRoutes);
app.use('/api/sticker' ,UserRoutes);
//app.use('/noti' ,NotiRoutes);
