//buffer固定長度 


/************創造buffer************** */
//1.alloc

let buf=Buffer.alloc(10) //創造10byte的buffer 8bit=1byte 會清空舊數據 歸0
//console.log(buf) //<Buffer 00 00 00 00 00 00 00 00 00 00>

//2. allocUnsafe

let buf2=Buffer.allocUnsafe(14) //不清空舊數據 不歸0 速度比較快
//console.log(buf2)//<Buffer 54 33 00 00 00 00 0....

//3.from 
let buf3=Buffer.from('hello[') //array string 轉成 buffer 每個字元轉成unicode 二進制
//console.log(buf3) //<Buffer 68 65 6c 6c 6f> \u0068\u0065\u006c\u006c\u006f

let buf4=Buffer.from([1,654,455,554]) //<Buffer 01 8e c7 2a> 數字轉成16進制
//console.log(buf4)

/************buffer 與string轉換************** */
let buf5=Buffer.from([105,122,111,117]) 
console.log(buf5.toString()) //izou  utf-8

/********buffer 讀寫 */
//類似array 用 []操作
let buf6=Buffer.from("hello") 
console.log(buf6[0]) //104
console.log(buf6[0].toString(2))//1101000 //與toString()不同 是進行進制轉換的 
buf6[0]=95 //修改buffer

/*********buffer 溢出 與 中文 */
let buf7=Buffer.from("hello") 
buf7[0]=361 //超過255  8bit 捨掉高位的 二進位 0001 0110 1001 =>取 0110 1001

let buf8=Buffer.from("你好") 
console.log(buf8) //<Buffer e4 bd a0 e5 a5 bd> 變6字節

