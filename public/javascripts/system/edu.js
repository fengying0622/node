var edu={
	//当前根字体大小   width/(defaultWidth/defaultRootFontSize)
	rootFontSize : (document.documentElement.getBoundingClientRect().width/(640/100)),
	//px单位数值转换为rem单位数值
	pxToRem : function(pxValue){
	    var docEl = document.documentElement,
	        width = docEl.getBoundingClientRect().width,//当前页面宽度
	        baseWidth = 640,
	        rootFontSize = 100,//默认根字体大小
	        curFontSize = width / (baseWidth / rootFontSize),//当前页面根字体大小
	        remValue = pxValue / curFontSize;

	    return remValue;
	},
	//rem单位数值转换为px
	remToPx : function(remValue){
		var _=this;
	    return remValue*_.rootFontSize;
	},
	//设置cookie ,cookie默认保存30天
	setCookie : function(name,value,expires,path,domain,secure){
	    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	    //失效时间，GMT时间格式
	    if(!expires) {
	        expires = new Date();
	        expires.setTime(expires.getTime() + 30*24*60*60*1000);
	    }
	    if (expires instanceof Date) {
	        cookieText += "; expires=" + expires.toGMTString();
	    }
	    if (path) {
	        cookieText += "; path=" + path;
	    }
	    if(!domain) domain = 'localhost';
	    if (domain) {
	        cookieText += "; domain=" + domain;
	    }
	    if (secure) {
	        cookieText += "; secure";
	    }
	    document.cookie = cookieText;
	},
	//获取cookie
	getCookie : function(key){
	    var arr = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)(;|$)'));
	    if (arr !== null) {
	        return (arr[2]);
	    } else {
	        return '';
	    }
	},
	// 获取url参数
	getQueryString : function(name){
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) return decodeURIComponent(r[2]);
	    return null;
	},
	fetchImgSize : function(url,callback){
	    var obj = new Image();
	    obj.src = url;
	    obj.onload = function(){
	        var w=obj.width,
	            h=obj.height;
	        callback(w,h);
	    }
	}
}
