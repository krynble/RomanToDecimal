/** 
 * Takes a Roman numeral string and returns it's decimal value
 * @param  string  romanString The Roman Numeral input
 * @return integer             the decimal value or -1 in case of a malformatted string
 */
function romanToDecimal(romanString) {
	var output = 0, i;
	romanString = romanString.toUpperCase();

	/* Check for a few special cases - substractions. */

	// IV = 4
	i = romanString.match(/IV/g);
	output += ( i ? i.length : 0 ) * 4;
	romanString = romanString.replace(/IV/g, '');

	// IX = 9
	i = romanString.match(/IX/g);
	output += ( i ? i.length : 0 ) * 9;
	romanString = romanString.replace(/IX/g, '');

	// XL = 40
	i = romanString.match(/XL/g);
	output += ( i ? i.length : 0 ) * 40;
	romanString = romanString.replace(/XL/g, '');

	// XC = 90
	i = romanString.match(/XC/g);
	output += ( i ? i.length : 0 ) * 90;
	romanString = romanString.replace(/XC/g, '');

	// CD = 400
	i = romanString.match(/CD/g);
	output += ( i ? i.length : 0 ) * 400;
	romanString = romanString.replace(/CD/g, '');

	// CM = 900
	i = romanString.match(/CM/g);
	output += ( i ? i.length : 0 ) * 900;
	romanString = romanString.replace(/CM/g, '');
	

	/* Calculate standard cases */
	for (i = 0; i < romanString.length; i++) {
		switch(romanString[i]) {
			case 'M':
				output += 1000;
			break;
			case 'D':
				output += 500;
			break;
			case 'C':
				output += 100;
			break;
			case 'L':
				output += 50;
			break;
			case 'X':
				output += 10;
			break;
			case 'V':
				output += 5;
			break;
			case 'I':
				output += 1;
			break;
			default:
				return -1;
			break;
		}
	}
	return output;
}

var http = require("http"), url = require("url"), fs = require('fs');

http.createServer(function(request, response) {
	var called_url = url.parse(request.url, true);
	
	if(called_url.pathname === '/' || called_url.pathname === '/index.html') {
		fs.readFile('./index.html', function(err, contents) {
			if(err) {
				response.writeHead(500, {"Content-Type": "text/plain"});
				response.write("Error loading index template file.");
				response.end();
				return;
			}
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write(contents);
			response.end();
		});
	} else if(called_url.pathname === '/calculate') {
		if(typeof(called_url.query.number) !== 'undefined') {
			var retorno = romanToDecimal(called_url.query.number);
			if(retorno >= 0) {
				response.writeHead(200, {"Content-Type": "text/json"});
				response.write('{"status": "OK", "result": ' + retorno + '}');
				response.end();
				return;
			}
		}
		response.writeHead(500, {"Content-Type": "text/json"});
		response.write('{"status": "error"}');
		response.end();
	} else if (called_url.pathname === '/bootstrap.min.css' || called_url.pathname === '/bootstrap.min.js') {
		fs.readFile('.' + called_url.pathname, function(err, contents) {
			if(err) {
				response.writeHead(500, {"Content-Type": "text/css"});
				response.write("");
				response.end();
				return;
			}
			response.writeHead(200, {"Content-Type": "text/css"});
			response.write(contents);
			response.end();
		});
	}
	else {
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("Not found.");
		response.end();
	}

}).listen(8080);



