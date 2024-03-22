/********express generator  創建一個express 應用骨架***
 * 
文件結構與基礎代碼建構起來
npm i -g express-generator 全域
之後 可以在命令列有express 指令
express -h 查看指令

express -e  119_express_generator //view 用ejs 工作目錄在119...
在工作目錄 安裝依賴 npm i
把項目跑起來 npm start
看package.json裡 入口不是在app.js  實際是在start屬性的 ./bin/www

/bin/www 裡 有導入app.js

app.js裡
app.use('/', indexRouter);  //設置路由前綴 indexRoute裡的路由會自動加入 / 這個前綴
app.use('/users', usersRouter);//設置路由前綴 indexRoute裡的路由會自動加入 /users 這個前綴

404處理
app.use(function(req, res, next) {
  next(createError(404));
});

另一種處理方式
app.all(*....
 * 
 * 
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); 
var usersRouter = require('./routes/users');
var filesRouter = require('./routes/files');
var accountsRouter = require('./routes/accounts');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);     //設置路由前綴 indexRoute裡的路由會自動加入 / 這個前綴
app.use('/users', usersRouter);//設置路由前綴 usersRouter /users 這個前綴

//上傳文件報文路由 用formidable
app.use('/files',filesRouter)

//記帳本 路由
app.use('/accounts',accountsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// 404另一種處理方式
// 另一種處理方式
// app.all('*', (req, res) => {
//   res.send('404')
// })

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
