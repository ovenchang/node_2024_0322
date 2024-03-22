//fs file system
//文件 創建 刪除 重命名 移動 寫入 讀取 ...

/***文件寫入 
 * 新建文件 寫入內容 
 * 
*/
const fs = require('fs')
fs.writeFile('./座右銘.txt', '123456', err => {
    //如果寫入失敗 err=>錯誤對象 成功 err=>null
    if(err){
        console.log('fail')
        return
    }
    console.log('success')
})

//同步寫入
fs.writeFileSync('./data.txt','teststs',{flag:'a'})


/******************追加寫入 */
fs.appendFile('./座右銘.txt',' 89998899',err => {
    //如果寫入失敗 err=>錯誤對象 成功 err=>null
    if(err){
        console.log('append fail')
        return
    }
    console.log('append success')
})

/**同步 */
fs.appendFileSync('./座右銘.txt','0000000')


/**************************流式寫入 */
//創建寫入流對象 跟文件建立通道
//減少文件關閉次數 大文件 下載 安裝 錄製影片
const stream=fs.createWriteStream('./座右銘.txt')
stream.write("11111111\r\n")
stream.write("2222222\r\n")
stream.end()

/**********文件讀取********** */
fs.readFile('./座右銘.txt',(err,data)=>{
    if(err){
        console.log('fail')
        return
    }
    console.log(data.toString())
})
/**同步 */
let data=fs.readFileSync('./座右銘.txt')
console.log('sync',data.toString())

/***********************流式讀取 */
//一塊一塊讀
//1.創建讀取流物件
const rs=fs.createReadStream("./data.txt") 
//2.綁定data事件 每當讀完一塊 就會執行callback 把讀出來的內容 傳給chunk
rs.on('data',chunk=>{
    console.log('aaaa')
    console.log(chunk) //chunk.length 65536  64KB
})
//3.結束流事件  可選
rs.on('end',()=>{
    console.log('end')
})

/**********************複製文件* */
//方式一 readFile
//讀文件內容
const data1=fs.readFileSync('./data.txt')
//寫入文件
fs.writeFileSync('./data1.txt',data1)

//方式二 流式複製
//創建讀取流物件
const rs1=fs.createReadStream("./data.txt")
//創建寫入流物件
const ws1=fs.createWriteStream('./data2.txt')

//綁定讀取流data事件
rs1.on('data',chunk=>{
    ws1.write(chunk)
})

//流式複製更簡便作法
rs1.pipe(ws1) //讀取流與寫入流之間建一個管道

/********文件重命名 移動****
//重命名
fs.rename('./座右銘.txt','./座右銘1.txt',err=>{})
移動
//fs.rename('./座右銘.txt','../234/座右銘.txt',err=>{})
*/

/****************文件刪除  
//方法一
fs.unlink('./座右銘.txt',err=>{})
//方法二
fs.rm('./座右銘.txt',err=>{})
*/

/******************資料夾操作 */
//創建資料夾
fs.mkdir('./123',err=>{})

//歸迴創建
fs.mkdir('./123/456/789',{recursive:true},err=>{})

//讀取文件夾
fs.readdir('./',(err,data)=>{
    if(err){
        console.log('讀取文件夾 fail')
        return
    }
    console.log(data) //array
})
//刪除文件夾 遞歸刪除
fs.rm('./123',{recursive:true},(err)=>{
    if(err){
        console.log('刪除文件夾 fail',err)
        return
    }
})

/******************查看資源狀態 */
fs.stat('./data1.txt',(err,stat)=>{
    if(err){
        console.log('查看資源狀態 fail',err)
        return
    }
    console.log(stat)
    console.log(stat.isFile())
    console.log(stat.isDirectory())
})

/*********************fs 路徑 探討
//相對路徑
fs.writeFileSync('./index.txt','aaaa')
//絕對路徑
fs.writeFileSync('/home/ovenchang/node_2024_0304','aaaa')
fs.writeFileSync('D:/home/ovenchang/node_2024_0304','aaaa')

//fs 參照的相對路徑 是命令行所在的工作目錄 不是檔案的所在目錄
fs.writeFileSync('./index.txt','aaaa')
./ =>當前目錄 是指命令行的當前目錄 不是檔案的所在目錄

//絕對路徑可解決這問題
//__dirname 全域變數 保存檔案的所在目錄的絕對路徑
fs.writeFileSync(__dirname + '/index.txt','aaaa')
*/

/**********批次重命名文件 */
//讀取abc文件夾的文件列表 如果檔名小於10 左補0
const files=fs.readdirSync(__dirname+"/abc")
//loop
files.forEach(item=>{
    let tmp
    let [num,name] =item.split('.')

    if(Number(num)<10){
        num='0'+num
        tmp=num+'.'+name
        fs.renameSync(`${__dirname}/abc/${item}`,`${__dirname}/abc/${tmp}`)
    }
})
