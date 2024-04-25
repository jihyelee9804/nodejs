// server 객체를 생성하고 52273번 포트를 사용해서 서버를 실행한다.

// 모듈 추출
const http = require('http');

// 웹 서버 생성, http 모듈의 createServer() 메서드는 server 객체를 반환한다.
const server = http.createServer();

// 웹 서버 실행
server.listen(52273);