var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

function accept(req, res) {

	if (req.url == '/info') {

		if (req.headers.authorization != 'password') {
			res.writeHead(403, {'Content-Type': 'text/plain; charset=utf-8'});
			res.end('Извините, доступ запрещён.');
			console.error("Wrong Authorization Header: " + req.headers.authorization);
			return;
		}

		res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

		res.end('Добро пожаловать!');
		return;
	}

    file.serve(req, res);

}



// -----------------------------------

if (!module.parent) {
  http.createServer(accept).listen(8080);
  console.log('Сервер запущен на порту 8080');
} else {
  exports.accept = accept;
}
