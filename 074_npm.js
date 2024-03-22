/******包管理工具 */
//管理package的軟體 可對package進行 download install update delete upload 等動作

const { uniqueSort } = require('jquery')
const { listeners } = require('npm')

/*** npm  node package manager ****/
npm -v 版本號

/****** 初始化 package***/
npm init 
npm init -y 快速創建
會產生一個package.json
package.json package 的配置文件 每個package都要有

/****** 下載package***/
npm i math
下載完math後 math就是當前這個package的依賴包
比如 A 引入 B 就說  B是A的依賴包 A依賴B

module package 存放目錄
package.json
package-lock.json 固定package版本訊息 確保這次安裝與下次安裝版本一致

安裝包時 不一定要在根目錄下  在下層工作目錄安裝 會自動尋找上層的node_module 安裝

/*****require 導入npm 包的流程 */
1.會找當前入目下modules夾裡的同名文件夾
require('math')
require('./node_modules/math')
require('./node_modules/math/index.js')

2.找上級入目下modules夾裡的同名文件夾，直到磁碟根目錄

/*********生產依賴與開發依賴* */
安裝時可區分
生產依賴 npm -S jquery 在生產與開發都使用
開發依賴 npm -D less   在開發使用

在package.json裡 存放位置不一樣
dependencies": {
    "jquery": "^3.7.1",
  },
  "devDependencies": {
    "less": "^4.2.0"
  }

  /*******npm全局安裝 **** */
  //全局安裝的指令不受工作目錄影響
  npm i -g nodemon

  可用 npm root -g 查看全局安裝的目錄

  /********修改window執行策略 */
  如果全局安裝的權限有問題
  命令行選cmd 不要選powershell

  /**環境變數 */
想在任意位置都可執行npm
在環境變數裡加上npm應用程式的所在目錄

/******安裝包的所有依賴 */
npm i 
可以依據package.json package-lock.json依賴聲明安裝所有依賴
node_modules大多數情況不會存入git

/********安裝指定版本的包 */
遇到不匹配的版本 有需要安裝特定版本的包
npm i jquery@1.7.2

/*********刪除依賴 */
局部刪除
npm remove uniq

全局刪除
npm remove -g nodemon

/******npm 配置命令別名*** */
通過配置命令別名可以更簡單執行命令
在package.json裡面
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server":"node ./074_npm.js" //別名
    "start":"node ./0777_ko.js"
  },
}

在命令行裡 就可以用 npm run server 執行
別名是start  可以用 npm start 執行 不用加run

npm run 有自動向上尋找的特性 在下層工作目錄 執行 npm run 會找上層的 跟require 一樣
對於陌生項目 可以通過查看scirpts 屬性來參考項目的一些操作

/**********包管理工具 yarn*** */
yarnpkg.com

安裝yarn
npm i -g yarn

初始化 yarn init 
安裝包 
yarn add uniq
yarn add less --dev
yarn global add nodenom //全局
yarn //安裝包的所有依賴
yarn remove uniq
yarn server //運行別名

yarn global bin //查看全局安裝的目錄
yarn 的鎖文件 yarn.lock