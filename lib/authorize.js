var crypto = require('crypto'),
    connect = require('./connect.js');
var http = require('http');
function permission(path,role){
    var list=['a','b','c','d','e','f','g'];
    for(i in list){
        if(role==list[i]){
            role=parseInt(i)+1;
        }
    }
    var i=0;
    switch(path[1]){
        case 'teacherTeachPlan':
        if(path[2]!='getMenuBySubjectAjax'){
            i=2;
        }
        break;

        case 'planVideo':
            i=2;
        break;

        case 'classLearnPlan':
            if(path[2]!='getMenuBySubjectAjax'){
                i=2;
            }
        break;

        case 'selfTeachAnalysis':
            i=2;
        break;

        case 'lessonAnalysis':
            i=4;
        break;
    }
    // console.log(role)
    return i<role;
}
exports.filter=function (req,res,next) {
    if (!req.session.userInfo) {
        if(req.cookies.auth){
            var postData= JSON.parse(new Buffer(req.cookies.auth, 'base64').toString());
            connect.post('/Teaching/teacher/login',postData,function(data){
                if(data.success=='true'){
                    req.session.userInfo=data;
                    req.session.userInfo.roleList[req.session.userInfo.roleList.length-1];
                    for(i in data.roleList){
                        if(data.roleList[i]=='c'||data.roleList[i]=='e'||data.roleList[i]=='f'||data.roleList[i]=='g'){
                            req.session.userInfo.allSubject=true;
                        }
                    }
                    if(permission(req.path.split('/'),req.session.userInfo.roleList[req.session.userInfo.roleList.length-1])){
                        next();
                    }else{
                        res.send('没有权限！')
                    }
                }else{
                    return res.redirect('/login?backurl='+req.originalUrl);
                }
            });
        }else{
            return res.redirect('/login?backurl='+req.originalUrl);
        }
    }else{
        if(permission(req.path.split('/'),req.session.userInfo.roleList[req.session.userInfo.roleList.length-1])){
            next();
        }else{
            res.send('没有权限！')
        }
    }
}
exports.check=function (req,res,next) {
    return req.session.userInfo;
}
// 用户登录
exports.loginAjax=function (req,res,next) {
    var postData={
        teacherPhone:req.body.mobile,
        password:req.body.code,
    };
    console.log(postData)
    connect.post('/Teaching/teacher/login',postData,function(data){
        if(data.success=='true'){
            req.session.userInfo=data;
            req.session.userInfo.roleList[req.session.userInfo.roleList.length-1];
            for(i in data.roleList){
                if(data.roleList[i]=='c'||data.roleList[i]=='e'||data.roleList[i]=='f'){
                    req.session.userInfo.allSubject=true;
                }
            }
            if(req.body.save){
                var auto=new Buffer(JSON.stringify(postData)).toString('base64');
                res.cookie('auth', auto,{ maxAge: 1000*60*60*24*7 });
            }
            res.json(data);
        }else{
            res.json({success:false});
        }
    });
}
