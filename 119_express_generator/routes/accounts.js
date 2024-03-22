const express = require('express')
const router = express.Router()

//導入 shortid
const shortid=require('shortid')

//導入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname+'/../data/db.json')
//手動加入{account:[]}

//獲取db對象
const db = low(adapter)

/* 記帳列表頁面 */
router.get('/', function (req, res, next) {
  //獲取所有帳單訊息
  let accounts=db.get('accounts').value()
  res.render('accounts/list',{accounts:accounts})
});

/**添加記帳頁面 */
router.get('/create', function (req, res, next) {
  res.render('accounts/create')
});

/**新增紀錄 */
router.post('/', function (req, res, next) {
  //使用shortid來產生id npm i shortid
  let id=shortid.generate()
  db.get('accounts').unshift({id:id, ...req.body}).write()
  res.render('accounts/success',{msg:'成功'})
});
module.exports = router;
