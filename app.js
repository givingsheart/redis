var express = require('express'),
	app = express()

app.get('/', function(req, res) {
	res.send('서버 응답중')
})

app.listen(3000)

console.log('서버 실행중 3000포트')