//fs.readFile is an asynchronis function where action is taken via a callback function

var fs = require('fs');

var options = { encoding: 'utf-8' };

function printData (error, data) {
	console.log(data);
}

fs.readFile('data.json',options, printData);