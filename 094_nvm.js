const { init } = require("./119_express_generator/app")

/****nvm */
node version manager 管理node版本 方便切換不同版本nodejs

下載nvm
https://github.com/nvm-sh/nvm

nvm list available 顯示所有可下載的nodejs版本
nvm list 顯示已下載的nodejs版本
nvm install 18.12.1 下載
nvm uninstall 18.12.1 刪除
nvm use 18.12.1 切換到這個版本

/*********安裝nvm nodejs linux */
1.更新相依套件
apt-get update
apt-get install build-essential libssl-dev

2. 前往 https://github.com/nvm-sh/nvm/releases 確認目前nvm最新版本

3. 根據最新版本資訊 使用curl抓取指行語法
curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash
上面的版本請依照github看到的最新版本進行調整

4. 使用下列指令，自動重開連線
source ~/.profile

5. 驗證是否成功
nvm --version

安裝nodejs
nvm install 8.9.1

安裝express-generator
npm i -g express-generator

創建專案
express -e project01

初始化 package
npm init

安裝依賴
npm i

package.json
node ./bin/www 改成 nodemon ./bin/www


/***********設定80port*****/
sudo apt-get install libcap2-bin
sudo setcap cap_net_bind_service=+ep /home/ovenchang/.nvm/versions/node/v21.7.1/bin/node

查看node.js的安装路径
which node