var express = require('express.io'),
  server = express().http().io(),
  port = process.env.PORT || 30000,
  staticRoot = __dirname;

server.use(express.cookieParser());
server.use(express.session({
	secret:'vt67RTDC3r4CHRT3x4t56cuRCTi67bvRC4y5cbbbl8YGJB76f'
}));
server.use('/', express.static(staticRoot));
server.listen(port);
console.log('http://localhost:'+port);