// 서버를 실행하고 10초 후에 서버를 종료한다.

// 서버 생성
const server = require('http').createServer();

// 서버 실행
server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 10초 후 함수 실행
var test = function() {
    // 서버 종료
    server.close();
};
setTimeout(test, 10000);