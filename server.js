const app =require('./App');
const http=require('http');

const server =http.createServer(app);
server.listen(3000);