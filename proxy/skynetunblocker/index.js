const express = require('express'),
			bodyParser = require('body-parser'),
			unblocker = require('unblocker'),
			fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(unblocker({
	prefix:	"/u/",
	requestMiddleware:	[]
}))

function getCurrentDate() {
	var date_ob = new Date();
	var month = (("0" + (date_ob.getMonth() + 1)).slice(-2)).toString();
	var day = (("0" + (date_ob.getDay() + 1)).slice(-2)).toString();
	var year = (date_ob.getFullYear()).toString();
	return (month + "/" + day + "/" + year)

}
function getClientAddress(req) {
	return (req.headers['x-forwarded-for'] || '').split(',')[0] 
	|| req.connection.remoteAddress;
};

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/unblock', (req, res) => {
	var url = req.body.URL
	var ip = req.ip;
	
	res.redirect("https://skynetunblocker.codesalvageon.repl.co/u/" + url);
	console.log(url);
});

app.listen(3000, () => {
	console.log('server started on port ' + 3000);

});

// Handle 404
app.use(function(req, res) {
  res.sendFile('./public/404.html', 404)
});

// Handle 500
app.use(function(error, req, res, next) {
  res.sendFile('./public/504.html', 500);
});
