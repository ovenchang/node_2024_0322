var express = require('express');
var router = express.Router();
var { formidable } = require('formidable')

/* GET home page. */
//上傳表單
router.get('/form', function (req, res, next) {
  res.render('fileForm');
});
//處理上傳文件
router.post('/upload', function (req, res, next) {
  //創建表單對像
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + '/../public/images', //儲存文件的目錄
    keepExtensions: true //保持文件後綴
  });
  //解析請求報文
  //fields 一般表單的值
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    //res.json({ fields, files });
    console.log(files)
    //保存該文件url
    let url='/images/'+files.myFile[0].newFilename
    res.send(url)
  });
});

module.exports = router;
