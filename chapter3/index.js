const http = require('node:http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// console.log("안녕하세요");

// function sum() {
//     // i++, i = i + 1, i += 1,
//     var sum = 0;
//     for (var i = 1; i <= 100; i++) {
//         sum += i;
//         console.log(sum);
//     }
//     console.log("1부터 100까지 더한 결과: ", sum);
// }

// sum();