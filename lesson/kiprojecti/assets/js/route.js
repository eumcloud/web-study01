// URL에 따라서 다른응답을 주도록 세팅

// 서버입장에서, URL정보(클라이언트가 요청)는 request객체의 속성을 통해 들어온다. **받는 정보중 path부터 중요한 정보이다.

const http = require("http");
users = ['Tom', 'Andy', 'Jessica', "paul"];

let server = http.createServer(function (request, response){
    if(request.url === "/"){
        response.end('<h2>Welcome!</h2>');
    }else if(request.url === '/users'){
        response.end("<h1>"+users + "</h1>");
    }else if(request.url.split('/')[1] === 'users'){//url : /users/1, /users/2, .. --> split 활용
        let userIdx = request.url.split('/')[2];
        let userName = users[userIdx -1];
        
        response.end('<h1>' + userName + '</h1>');
    }else{
        response.end('<h1>Page Not Available</h1>');
    }
});

server.listen(3000);