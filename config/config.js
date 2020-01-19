var config={
	name:'edu',
	cookie_secret: '576183492',
	env:'',
    staticUrl:'localhost:80',
	roleList:[
		{name:'教师',value:'a'},
		{name:'年级备课组',value:'b'},
		{name:'年级组',value:'c'},          //单年级全科
		{name:'学科教研组',value:'d'},		//全年级单科
		{name:'教学中层管理',value:'e'},   //全年级全科
		{name:'校长室',value:'f'},          //全年级全科
		{name:'超级管理员',value:'g'},          //全年级全科
	],
	subList:[
		{name:'语文',value:'a'},
		{name:'数学',value:'b'},
		{name:'英语',value:'c'},
		{name:'物理',value:'d'},
		{name:'化学',value:'e'},
		{name:'生物',value:'f'},
		{name:'地理',value:'g'},
		{name:'历史',value:'h'},
		{name:'政治',value:'i'},
	],
};
module.exports=config;
