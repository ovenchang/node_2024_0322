/*******ejs */
//用來分離介面與業務邏輯 html 與 nodejs
//1.安裝ejs npm i ejs
//2.導入ejs
const ejs = require('ejs')
const path = require('path')
//3.用ejs渲染

//字串渲染
let name = '小明'
//render會對內容作解析 會找標示 把標示內的內容 替換成數據
let result = ejs.render('hello <%= username %>', { username: name })
console.log(result)

//列表渲染
const arr=['11','22','33']
result=ejs.render(
    `<ul>
    <% arr.forEach(item=>{ %>
        <li><%= item %></li>
    <% }) %>
    </ul>`,{arr})

console.log(result)

//條件渲染
let isLogin=true

result=ejs.render(`
<% if(isLogin){ %>
        <span> hello welcom </span>
<% } %>
`,{isLogin})

//express 裡 使用ejs
const express = require('express')
const app = express()
//1.設置模版引擎
app.set('view engine','ejs')
//2.設置模版文件存放位置
app.set('views',path.resolve(__dirname,'./views'))

//3.render response
app.get('/admin', (req, res) => {
    let username='小華'
    //res.render('模版文件名','數據')
    res.render('admin',{username})
})

app.listen(3000, () => {
    console.log('服務啟動 3000 ')
})






