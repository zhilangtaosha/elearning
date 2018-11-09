var client = require('socket.io-client')('http://127.0.0.1:3000');

function rand(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

client.on('connect', function() {
	console.log('连接服务器成功，向服务器发送登录消息！');

	client.emit('login', { uid: rand(10000, 99999) }, function(r) {
		console.log('登录服务器成功！', r);
	});
});

client.on('laba', function(data) {
	console.log('接收到广播：', data);
});

client.on('disconnect', function(){
	console.log('断开连接');
});

