let fs = require('fs'); //получаем доступ к модулю файловой системе nodeJS
let events = require('events'); //получаем доступ модулю событий nodeJS
let http = require('http');
function index(request, response) {
    response.writeHead(200, {
        'Content-Type':'text/html; charset=utf-8'
    });
    fs.createReadStream('./index.html').pipe(response);
}
function hello(request, response) {
    let example = {
        name: 'vasia',
        surname: 'pipkin'
    };
    response.writeHead(200, {
        'Content-Type':'application/json'
    });
    response.end(JSON.stringify(example));
}
let server = http.createServer((request, response) => {
    if(request.url === '/') {
        index(request, response);
    }
    else if(request.url === '/hello') {
        hello(request, response);
    }
    else {
        response.writeHead(404, {
            'Content-Type':'text/html; charset=utf-8'
        });
        response.end(fs.readFileSync('./404.html'));
    }
    // console.log(`incoming request ${request.url}`)
    // response.end('hello world');
})
server.listen(3000, '127.0.0.1');