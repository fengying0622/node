var multer = require('multer');
var md5 = require('md5');
var path = require('path');
var connect = require('./connect.js');
var fs = require('fs');

//添加配置文件到muler对象。
var upload = multer({
    storage: multer.diskStorage({
        //设置上传文件路径,以后可以扩展成上传至七牛,文件服务器等等
        //Note:如果你传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
        destination: path.join(__dirname,'../public/files/'),
        //TODO:文件区分目录存放
        //获取文件MD5，重命名，添加后缀,文件重复会直接覆盖
        filename: function (req, file, cb) {
            var fileFormat =(file.originalname).split(".");
            cb(null, file.fieldname + '-' + md5(file) + "." + fileFormat[fileFormat.length - 1]);
        }
    })
});
exports.upload= upload.single('avatar');
exports.callback=function (req,res,next) {
    if (req.file) {
        res.json({
            success:true,
            src:'/files/'+req.file.filename
        });
    }else{
        res.json({success:false});
    }
}
exports.fileInfoUpload=function (req,res) {
    var postData=req.body;
    postData.teacherid=req.session.userInfo.teacher.teacherid;
    connect.post('/Teaching/personelResource/upload',postData,function(json){
        res.json({success:true});
    });
}
//添加配置文件到muler对象。
var umUpload = multer({
    storage: multer.diskStorage({
        //设置上传文件路径,以后可以扩展成上传至七牛,文件服务器等等
        //Note:如果你传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
        destination: path.join(__dirname,'../public/images/edit/'),
        //TODO:文件区分目录存放
        //获取文件MD5，重命名，添加后缀,文件重复会直接覆盖
        filename: function (req, file, cb) {
            //console.log(file.originalname, file)
            var fileFormat =(file.originalname).split(".");
            var t=new Date();
            cb(null, t.getTime()+md5(file) + "." + fileFormat[fileFormat.length - 1]);
        }
    })
});
exports.umUpload= umUpload.single('file');
exports.umCallback=function (req,res,next) {
    if (req.file) {
        res.send('/images/edit/'+req.file.filename)
    }else{
        res.json({success:false});
    }
}
exports.formula=function (req,res) {
    var imgData = req.body.img;
    //过滤data:URL
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    var dir=path.join(__dirname,'../public/images/formula/');
    var name=md5(base64Data)+'.png';
    //console.log(dir+name)
    fs.writeFileSync(dir+name, dataBuffer);
    res.json({success:true,src:'/images/formula/'+name});
}
