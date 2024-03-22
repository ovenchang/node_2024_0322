/*****路由模組化 */
//1.導入express
const express=require('express')
const { homeRouterMiddleWare, onlyHome }=require('../middleware/homeRouterMiddleWare')
//2.創建router對象
const router=express.Router()

//中間件
router.use(homeRouterMiddleWare)

//3.創建路由規則
router.get('/home', onlyHome, (req, res) => {
    res.send('home')
})

router.get('/search',  (req, res) => {
    res.send('search')
})

//4.曝露router
module.exports=router
