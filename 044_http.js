const http = require('http')
const url = require("url")
//1.創建http物件
// req =>請求報文對象
// res =>回應報文對象 可以用來設置 回應的 header body
// callback 在接收http 請求時執行
const server = http.createServer((req,res)=>{

  res.setHeader("content-type","text/html;charset=utf-8")

  /******取得req 行 與 header 
  console.log(req.method) //取得req方法
  console.log(req.url) //取得req url 只包含路徑與querystring
  console.log(req.httpVersion) //取得http 版本
  console.log(req.headers) //取得req header
  */

  /******取得req body  POST 進來時**
  let body='';
  req.on('data',chunk=>{
      body+=chunk //chunk 是buffer +時 會自動轉成字串
  })
  req.on('end',()=>{
    console.log(body)
}) 
*/
/********取得req 查詢路徑與querystring  方法一
  //使用url模塊 解析req.url => /abc/def?ws=h5
let theUrl=url.parse(req.url,true) //取得物件 true 表示querystring 會解析成物件
console.log(theUrl.pathname) //取得url路徑
console.log(theUrl.query) //取得querystring物件
*/

/********取得req 查詢路徑與querystring 方法二
//使用URL物件
const fullURL = `${req.headers['x-forwarded-proto'] || req.connection.encrypted ? 'https' : 'http'}://${req.headers.host}${req.url}`;
let urlObj=new URL(fullURL)
console.log(urlObj)
console.log(urlObj.searchParams.get('ws')) //取得querystring
*/


/*************設置response 資訊******* */
res.statusCode=203 //設定狀態碼
res.statusMessage='yes'//設定狀態文字
res.setHeader('content-type','text/html;charset=utf-8')//設定標頭
res.setHeader('myHeader','ww')//設定自訂標頭
res.setHeader('test',['a','b']) //多個同名標頭

res.write('1') 
res.end('你dd好')//設置回應body 並結束response
})

//2.監聽port 啟動服務
//callback 啟動服務時執行
server.listen(80,()=>{
  console.log('啟動服務')
})









