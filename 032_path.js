//path 操作路徑

const path=require("path")


/*******接規範的絕對路徑 */
//解決 路徑斜線與反斜線不一致的問題
//第一參數給絕對路徑 第二個以後給相對
console.log(path.resolve(__dirname,'./abc/04.txt','./dd'))

/*****取得路徑分隔符 */ 
//window \  linux /
console.log(path.sep)

/*******解析路徑****** */
console.log(path.parse(__filename))
/*
{
  root: '/',
  dir: '/home/ovenchang/node_2024_0304',
  base: '032_path.js',
  ext: '.js',
  name: '032_path'
}*/

/*******取得文件名*******/
console.log(path.basename(__filename))

/*******取得目錄名*******/
console.log(path.dirname(__filename))

/*******取得副檔名*******/
console.log(path.extname(__filename))







if ($('#limitTimeBlock .limittime_block_swiper .swiper-container').length > 0) {
    new Swiper('#limitTimeBlock .limittime_block_swiper .swiper-container', {
      observer: true,
      observeParents: true,
      breakpoints: {
        360: {
          loop: false,
          slidesPerView: 2,
          spaceBetween: 8,
        },
        650: {
          loop: false,
          slidesPerView: 3,
          spaceBetween: 8,
        },
        768: {
          loop: false,
          slidesPerView: 3,
          spaceBetween: 8,
        },
        820: {
          loop: false,
          slidesPerView: 3,
          spaceBetween: 8,
        },
        1024: {
          loop: false,
          slidesPerView: 3,
          spaceBetween: 8,
        },
        1060: {
          loop: false,
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1315: {
          loop: false,
          slidesPerView: 5,
          spaceBetween: 5,
        },
        1600: {
          loop: false,
          slidesPerView: 5,
          spaceBetween: 5,
        }
      },
      pagination: {
        el: '#limitTimeBlock .limittime_block_swiper .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '#limitTimeBlock .limittime_block_swiper .swiper-button-next',
        prevEl: '#limitTimeBlock .limittime_block_swiper .swiper-button-prev'
      },
      lazy: true,                 
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 80,      
      },
    });
  }    
  

