
var express = require("express")
  , redirect = require("express-redirect");
 
var app = express();
redirect(app); 
var router = express.Router();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);

const port= process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

server.listen(port, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log(`Example app listening at port ${port}`);
});

app.use(router);
require('./routes/admin/testtxn')(app);
require('./routes/admin/pgredirect')(app);
require('./routes/admin/response')(app);
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
