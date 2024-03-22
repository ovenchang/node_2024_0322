
/***http 模塊 靜態與動態資源 */
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  let pathname = new URL(`${req.headers['x-forwarded-proto'] || req.connection.encrypted ? 'https' : 'http'}://${req.headers.host}${req.url}`)
  if (req.url == '/') {
    word = fs.readFileSync(__dirname+'/01.html')
  } else if (req.url == '/index.js') {
    word = fs.readFileSync(__dirname+'/index.js')
  } else {
    word = ''
  }
  res.end(word)

  //console.log(pathname)
  // let word=''
  // if(req.url=='/'){
  //   word=fs.readFileSync('./01.html')
  // }else{
  //   word=fs.readFileSync(req.url)
  // }
  //res.end()
})

//2.監聽port 啟動服務
//callback 啟動服務時執行
server.listen(8080, () => {
  console.log('啟動服務')
})









