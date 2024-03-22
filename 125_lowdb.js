/*****lowdb */
//用於 Node、Electron 和瀏覽器的小型 JSON 資料庫。由lodash提供支援
//安裝 npm i lowdb@1.0.0
//您可以使用任何 lodash 函數，例如 _.get 和 _.find 以及簡寫語法。

//導入
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')

//獲取db對象
const db = low(adapter)
 
// 初始化數據
//db.defaults({ posts: [], user: {} }).write()


 
// 寫入數據
// db.get('posts') //取得物件路徑處的值 
//   .push({ id: 1, title: 'lrrrrrrrr'}).write()
//  return

//獲取數據
console.log(db.get('posts').value())
console.log(db.get('posts').value({id:1}))

//獲取單條數據
console.log(db.get('posts').find({id:1}).value())


//del數據
//console.log(db.get('posts').remove({id:1}).write()) //返回del對象

//update
db.get('posts').find({id:1}).assign({title:"55555555"}).write()

// Set a user using Lodash shorthand syntax
db.set('user.name', 'typicode')
  .write()
