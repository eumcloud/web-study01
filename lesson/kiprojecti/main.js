const http = require("http"); //통신규약. 프로토콜.

//서버객체 생성.
let server = http.createServer(function (request, response){
  response.end("<h2>Hello Node.js!</h2>");
}); 
server.listen(3000); //포트번호 3000을 통해서 클라이언트 요청대기. 
//ps. 서버안에서 동작하는 프로그램마다 사용하는 포트번호가 다르다.
  //접속 테스트시 로컬 127.0.0.1:3000을 통해서 접속.






// 참고)
// URL : Uniform Resource Locator
// 웹 상의 특정 자원의 위치를 나타내는 문자열
// *특정자원 : HTML, CSS, JavaScript, 이미지, 영상 등
//==>> URL의 구조
//http://example.com/business/mart/item?category=14&id=2965
//http - 스킴(scheme) ->프로토콜 이름 (클라이언트와 서버간의 통신규약. http 또는 https)
//example.com - 호스트(host) -> 특정서버를 나나타냄
//business/mart/item - 경로(path) -> 원하는 자원의 위치를 나타냄. business/mart디렉토리 안에 item 존재. 
//그러나, item파일이 꼭 없어도 됨. = 서버가 자신만의 방식으로 해석한것.

// ?category=14&id=2965 - 쿼리(query) ->서버에 요청할 때 원하는 것을 상세하게 표현하기 위해 사용.