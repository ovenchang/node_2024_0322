//全局中間件 紀錄ip
//next 指向後續的路由callback 或是後續的中間件callback
const fs = require('fs')
const { format } = require('date-fns');

let recordMiddle = (req, res, next) => {
    let { url, ip } = req
    fs.appendFileSync(__dirname + '/record.txt', format(new Date(), "yyyy-MM-dd HH:mm:ss") + `-${url}-${ip} \r\n`)
    //調用next
    next()
}

module.exports=recordMiddle