
//給homeRouter.js用的

//homeRouter的路由都會
let homeRouterMiddleWare = (req, res, next) => {
    console.log('all homeRouter will use')
    next()
}

//只有/home才會用到
let onlyHome = (req, res, next) => {
    console.log('only home will use')
    next()
}

module.exports = { homeRouterMiddleWare, onlyHome }