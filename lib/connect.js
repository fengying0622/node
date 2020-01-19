var config = require('../config/config.js');
// 与后台交互测试
var http = require('http');
exports.get= function(url,callback) {
	// 用于请求的选项
	var options = {
		hostname: 'localhost',
		path: config.env+url,
		method: 'GET',
		port:8080,
	};
	// 向服务端发送请求
	var req = http.request(options, function(response){
        response.setEncoding('utf8');
		// 不断更新数据
		var body = '';
		response.on('data', function(data) {
		  body += data;
		});

		response.on('end', function() {
		  	// 数据接收完成
		  	try{
		  		callback(JSON.parse(body));
			}
			catch(err){
				console.log(body);
		  		callback({success:false});
			}
		});
	});
	req.on('error', (e) => {
		console.log(`problem with request: ${e.message}`);
	});
	req.end();
	// callback({success:false});
};
exports.post= function(url,data,callback) {
	data = JSON.stringify(data);
	var options = {
		hostname: '127.0.0.1',
		path: config.env+url,
		method: 'POST',
		port:8080,
	    headers: {
	      'Content-Type':'application/json',
	      'Content-Length': new Buffer(data).length
	    }
	};
	// 向服务端发送请求
	var request = http.request(options, function(response){
	    response.setEncoding('utf8');
		// 不断更新数据
		var body = '';
		response.on('data', function(data) {
		  body += data;
		});
		response.on('end', function() {
		  	// 数据接收完成
		  	try{
		  		callback(JSON.parse(body));
			}
			catch(err){
				console.log(body);
		  		callback({success:false});
			}
		});
	});
	request.on('error', (e) => {
	    console.log(`problem with request: ${e.message}`);
	});
	request.write(data);
	request.end();
	// callback({success:false});
};
