// author suning
// 路由页面
var authorize = require('../lib/authorize');

// 图片上传
var path = require('path');

var fileUpload = require('../lib/fileUpload');
app.post('/fileUpload',fileUpload.upload,fileUpload.callback);
app.post('/fileInfoUpload',fileUpload.fileInfoUpload);
app.post('/umeditor/up',fileUpload.umUpload,fileUpload.umCallback);
app.post('/formula',fileUpload.formula);

// 获取菜单与用户信息
var menu = require('../modules/controller/menu/menuController');
app.get('/getMenuAjax',authorize.filter,menu.getMenuAjax);
app.get('/getAlertAjax',authorize.filter,menu.getAlertAjax);
// 登录注册
var auth = require('../modules/controller/authController');
app.get('/login', auth.login);
app.post('/loginAjax', authorize.loginAjax);
// 首页
var index = require('../modules/controller/indexController');
app.get('/',authorize.filter, index.index);

// 教学案
// 参考教案
var referTeachPlan = require('../modules/controller/plans/referTeachPlanController');
app.get('/referTeachPlan/index',authorize.filter, referTeachPlan.index);
app.get('/referTeachPlan/search',authorize.filter, referTeachPlan.search);
app.get('/referTeachPlan/detail/:rid',authorize.filter, referTeachPlan.detail);
app.get('/referTeachPlan/import',authorize.filter, referTeachPlan.import);
app.post('/referTeachPlan/importAjax',authorize.filter, referTeachPlan.importAjax);
// 集体教案
var groupTeachPlan = require('../modules/controller/plans/groupTeachPlanController');
app.get('/groupTeachPlan/index',authorize.filter, groupTeachPlan.index);
app.get('/groupTeachPlan/search',authorize.filter, groupTeachPlan.search);
app.get('/groupTeachPlan/detail/:cid',authorize.filter, groupTeachPlan.detail);
app.get('/groupTeachPlan/download/:cid',authorize.filter, groupTeachPlan.download);
// 班级教案
var teacherTeachPlan = require('../modules/controller/plans/teacherTeachPlanController');
app.get('/teacherTeachPlan/index',authorize.filter, teacherTeachPlan.index);
app.get('/teacherTeachPlan/searchAjax',authorize.filter, teacherTeachPlan.searchAjax);
app.get('/teacherTeachPlan/detail/:pid',authorize.filter, teacherTeachPlan.detail);
app.get('/teacherTeachPlan/download/:pid',authorize.filter, teacherTeachPlan.download);
app.get('/teacherTeachPlan/getMenuBySubjectAjax',authorize.filter, teacherTeachPlan.getMenuBySubjectAjax);
// 录播视频
var planVideo = require('../modules/controller/plans/planVideoController');
app.get('/planVideo/index',authorize.filter, planVideo.index);
app.get('/planVideo/play',authorize.filter, planVideo.play);
app.get('/planVideo/searchAjax',authorize.filter, planVideo.searchAjax);
// 参考学案
var referLearnPlan = require('../modules/controller/plans/referLearnPlanController');
app.get('/referLearnPlan/index',authorize.filter, referLearnPlan.index);
app.get('/referLearnPlan/search',authorize.filter, referLearnPlan.search);
app.get('/referLearnPlan/detail/:rid',authorize.filter, referLearnPlan.detail);
app.get('/referLearnPlan/import',authorize.filter, referLearnPlan.import);
app.post('/referLearnPlan/importAjax',authorize.filter, referLearnPlan.importAjax);
app.get('/subjectAjax',authorize.filter, referLearnPlan.subjectAjax);
// 集体学案
var groupLearnPlan = require('../modules/controller/plans/groupLearnPlanController');
app.get('/groupLearnPlan/index',authorize.filter, groupLearnPlan.index);
app.get('/groupLearnPlan/search',authorize.filter, groupLearnPlan.search);
app.get('/groupLearnPlan/detail/:cid',authorize.filter, groupLearnPlan.detail);
app.get('/groupLearnPlan/download/:cid',authorize.filter, groupLearnPlan.download);
// 班级学案
var classLearnPlan = require('../modules/controller/plans/classLearnPlanController');
app.get('/classLearnPlan/index',authorize.filter, classLearnPlan.index);
app.get('/classLearnPlan/searchAjax',authorize.filter, classLearnPlan.searchAjax);
app.get('/classLearnPlan/detail/:pid',authorize.filter, classLearnPlan.detail);
app.get('/classLearnPlan/download/:pid',authorize.filter, classLearnPlan.download);
app.get('/classLearnPlan/getMenuBySubjectAjax',authorize.filter, classLearnPlan.getMenuBySubjectAjax);

// 个人空间
// 我的班级教案
var selfTeachPlan = require('../modules/controller/self/selfTeachPlanController');
app.get('/selfTeachPlan/index',authorize.filter, selfTeachPlan.index);
app.get('/selfTeachPlan/searchAjax',authorize.filter, selfTeachPlan.searchAjax);
app.get('/selfTeachPlan/edit/:pid',authorize.filter, selfTeachPlan.edit);
app.post('/selfTeachPlan/getGroupTeachPlanByCidAjax',authorize.filter, selfTeachPlan.getGroupTeachPlanByCidAjax);
app.post('/selfTeachPlan/getGroupTeachPlanByPlanIdAjax',authorize.filter, selfTeachPlan.getGroupTeachPlanByPlanIdAjax);
app.get('/selfTeachPlan/deleteTeachPlanByPidAjax',authorize.filter, selfTeachPlan.deleteTeachPlanByPidAjax);
app.post('/selfTeachPlan/saveTeachPlanAjax',authorize.filter, selfTeachPlan.saveTeachPlanAjax);
app.get('/selfTeachPlan/download/:pid',authorize.filter, selfTeachPlan.download);
app.get('/selfTeachPlan/detail/:pid',authorize.filter, selfTeachPlan.detail);
// 我的集体教案
var myGroupPlan = require('../modules/controller/self/myGroupPlanController');
app.get('/myGroupPlan/index',authorize.filter, myGroupPlan.index);
app.get('/myGroupPlan/search',authorize.filter, myGroupPlan.search);
app.get('/myGroupPlan/edit/:cid',authorize.filter, myGroupPlan.edit);
app.post('/myGroupPlan/getReferTeachPlanByCidAjax',authorize.filter, myGroupPlan.getReferTeachPlanByCidAjax);
app.post('/myGroupPlan/getReferTeachPlanByPlanIdAjax',authorize.filter, myGroupPlan.getReferTeachPlanByPlanIdAjax);
app.get('/myGroupPlan/deleteTeachPlanByPidAjax',authorize.filter, myGroupPlan.deleteTeachPlanByPidAjax);
app.post('/myGroupPlan/saveTeachPlanAjax',authorize.filter, myGroupPlan.saveTeachPlanAjax);
app.get('/myGroupPlan/searchTeacher',authorize.filter, myGroupPlan.searchTeacher);
app.get('/myGroupPlan/chooseTeacher',authorize.filter, myGroupPlan.chooseTeacher);
app.get('/myGroupPlan/updateStatus',authorize.filter, myGroupPlan.updateStatus);
// 录播视频
var selfVideo = require('../modules/controller/self/selfVideoController');
app.get('/selfVideo/index',authorize.filter, selfVideo.index);
app.post('/selfVideo/upload',authorize.filter, selfVideo.upload);
app.get('/selfVideo/deleteVideoByVidAjax',authorize.filter, selfVideo.deleteVideoByVidAjax);
app.get('/selfVideo/download',authorize.filter, selfVideo.download);
app.get('/selfVideo/play',authorize.filter, selfVideo.play);
// 我的个人学案
var selfLearnPlan = require('../modules/controller/self/selfLearnPlanController');
app.get('/selfLearnPlan/index',authorize.filter, selfLearnPlan.index);
app.get('/selfLearnPlan/searchAjax',authorize.filter, selfLearnPlan.searchAjax);
app.get('/selfLearnPlan/edit/:pid',authorize.filter, selfLearnPlan.edit);
app.post('/selfLearnPlan/getGroupLearnPlanByCidAjax',authorize.filter, selfLearnPlan.getGroupLearnPlanByCidAjax);
app.post('/selfLearnPlan/getGroupLearnPlanByPlanIdAjax',authorize.filter, selfLearnPlan.getGroupLearnPlanByPlanIdAjax);
app.get('/selfLearnPlan/deleteLearnPlanByPidAjax',authorize.filter, selfLearnPlan.deleteLearnPlanByPidAjax);
app.post('/selfLearnPlan/saveLearnPlanAjax',authorize.filter, selfLearnPlan.saveLearnPlanAjax);
app.get('/selfLearnPlan/detail/:pid',authorize.filter, selfLearnPlan.detail);
app.get('/selfLearnPlan/download/:pid',authorize.filter, selfLearnPlan.download);
app.post('/selfLearnPlan/getOpenRecordAjax',authorize.filter, selfLearnPlan.getOpenRecordAjax);
app.post('/selfLearnPlan/publicAjax',authorize.filter, selfLearnPlan.publicAjax);
app.post('/selfLearnPlan/unPublicAjax',authorize.filter, selfLearnPlan.unPublicAjax);
// 我的集体学案
var myGroupLearnPlan = require('../modules/controller/self/groupLearnPlanController');
app.get('/myGroupLearnPlan/index',authorize.filter, myGroupLearnPlan.index);
app.get('/myGroupLearnPlan/search',authorize.filter, myGroupLearnPlan.search);
app.get('/myGroupLearnPlan/edit/:cid',authorize.filter, myGroupLearnPlan.edit);
app.post('/myGroupLearnPlan/getReferLearnPlanByCidAjax',authorize.filter, myGroupLearnPlan.getReferLearnPlanByCidAjax);
app.post('/myGroupLearnPlan/getReferLearnPlanByPlanIdAjax',authorize.filter, myGroupLearnPlan.getReferLearnPlanByPlanIdAjax);
app.get('/myGroupLearnPlan/deleteLearnPlanByPidAjax',authorize.filter, myGroupLearnPlan.deleteLearnPlanByPidAjax);
app.post('/myGroupLearnPlan/saveLearnPlanAjax',authorize.filter, myGroupLearnPlan.saveLearnPlanAjax);
app.get('/myGroupLearnPlan/searchTeacher',authorize.filter, myGroupLearnPlan.searchTeacher);
app.get('/myGroupLearnPlan/chooseTeacher',authorize.filter, myGroupLearnPlan.chooseTeacher);
app.get('/myGroupLearnPlan/updateStatus',authorize.filter, myGroupLearnPlan.updateStatus);
// 学生课堂表现
var performance = require('../modules/controller/self/performanceController');
app.get('/performance/index',authorize.filter, performance.index);
app.get('/performance/check/:cid/:classid',authorize.filter, performance.check);
app.get('/performance/score/:cid/:classid',authorize.filter, performance.score);
app.post('/performance/saveAjax',authorize.filter, performance.saveAjax);
app.post('/performance/searchAjax',authorize.filter, performance.searchAjax);
// 个人资源
var mySpace = require('../modules/controller/self/mySpaceController');
app.get('/mySpace/index',authorize.filter, mySpace.index);
app.get('/mySpace/searchAjax',authorize.filter, mySpace.searchAjax);
app.get('/mySpace/showPDF',authorize.filter, mySpace.showPDF);
app.post('/mySpace/update',authorize.filter, mySpace.update);
app.get('/mySpace/deleteSpaceByRidAjax',authorize.filter, mySpace.deleteSpaceByRidAjax);
// 公共空间
var publicBook = require('../modules/controller/public/publicBookController');
app.get('/publicBook/index',authorize.filter, publicBook.index);
app.get('/publicBook/searchAjax',authorize.filter, publicBook.searchAjax);

var publcSource = require('../modules/controller/public/publcSourceController');
app.get('/publcSource/index',authorize.filter, publcSource.index);
app.get('/publcSource/searchAjax',authorize.filter, publcSource.searchAjax);
app.get('/publcSource/play',authorize.filter, publcSource.play);

var studentProfile = require('../modules/controller/public/studentProfileController');
app.get('/studentProfile/index',authorize.filter, studentProfile.index);
app.get('/studentProfile/searchAjax',authorize.filter, studentProfile.searchAjax);
app.get('/studentProfile/detail',authorize.filter, studentProfile.detail);

// 分析报告
// var groupTeachAnalysis = require('../modules/controller/analysis/groupTeachAnalysisController');
// app.get('/groupTeachAnalysis/index',authorize.filter, groupTeachAnalysis.index);

var selfTeachAnalysis = require('../modules/controller/analysis/selfTeachAnalysisController');
app.get('/selfTeachAnalysis/index',authorize.filter, selfTeachAnalysis.index);
app.get('/selfTeachAnalysis/detail/:cid/:pid',authorize.filter, selfTeachAnalysis.detail);
app.get('/selfTeachAnalysis/searchAjax',authorize.filter, selfTeachAnalysis.searchAjax);

var selfLearnAnalysis = require('../modules/controller/analysis/selfLearnAnalysisController');
app.get('/selfLearnAnalysis/index',authorize.filter, selfLearnAnalysis.index);

var lessonAnalysis = require('../modules/controller/analysis/lessonAnalysisController');
app.get('/lessonAnalysis/index',authorize.filter, lessonAnalysis.index);
app.get('/lessonAnalysis/searchAjax',authorize.filter, lessonAnalysis.searchAjax);
app.get('/lessonAnalysis/download',authorize.filter, lessonAnalysis.download);

// 校长信箱
var principalMailbox = require('../modules/controller/principalMailbox/principalMailboxController');
app.get('/principalMailbox/index',authorize.filter, principalMailbox.index);
app.get('/principalMailbox/fetchAjax',authorize.filter, principalMailbox.fetchAjax);
app.get('/principalMailbox/viewAjax',authorize.filter, principalMailbox.viewAjax);
app.post('/principalMailbox/postAjax',authorize.filter, principalMailbox.postAjax);

// 系统设置
var setting = require('../modules/controller/setting/settingController');
app.get('/setting/index',authorize.filter, setting.index);
app.get('/setting/searchAjax',authorize.filter, setting.searchAjax);
app.post('/setting/addTeacherAjax',authorize.filter, setting.addTeacherAjax);
app.get('/setting/groupAddTeacherAjax',authorize.filter, setting.groupAddTeacherAjax);
app.get('/setting/deleteTeachPlanByPidAjax',authorize.filter, setting.deleteTeachPlanByPidAjax);
app.get('/setting/resetPassword',authorize.filter, setting.resetPassword);
app.post('/setting/setRoleAjax',authorize.filter, setting.setRoleAjax);
app.get('/setting/student',authorize.filter, setting.student);
app.get('/setting/class',authorize.filter, setting.class);
app.get('/setting/classr',authorize.filter, setting.classr);
app.get('/setting/searchStudentAjax',authorize.filter, setting.searchStudentAjax);
app.get('/setting/deleteStudentByPidAjax',authorize.filter, setting.deleteStudentByPidAjax);
app.post('/setting/addStudentAjax',authorize.filter, setting.addStudentAjax);
app.get('/setting/groupAddStudentAjax',authorize.filter, setting.groupAddStudentAjax);
app.get('/setting/updateClassAjax',authorize.filter, setting.updateClassAjax);
app.post('/setting/addClassAjax',authorize.filter, setting.addClassAjax);
app.get('/setting/classAddStudentAjax',authorize.filter, setting.classAddStudentAjax);
app.get('/setting/classAddTeacherAjax',authorize.filter, setting.classAddTeacherAjax);
app.get('/setting/studentInClassAjax',authorize.filter, setting.studentInClassAjax);
app.get('/setting/teacherInClassAjax',authorize.filter, setting.teacherInClassAjax);
app.get('/setting/delByStudentIdAjax',authorize.filter, setting.delByStudentIdAjax);
app.get('/setting/delByTeacherIdAjax',authorize.filter, setting.delByTeacherIdAjax);
app.get('/setting/delByClassIdAjax',authorize.filter, setting.delByClassIdAjax);
app.get('/setting/changeGroupAjax',authorize.filter, setting.changeGroupAjax);
app.get('/setting/self',authorize.filter, setting.self);
app.post('/setting/selfProfileAjax',authorize.filter, setting.selfProfileAjax);
app.get('/setting/introduce',authorize.filter, setting.introduce);

module.exports = function(app){};
