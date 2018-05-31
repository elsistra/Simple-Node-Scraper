const https = require('https');
const http = require('http');
const cheerio = require('cheerio');

http.get('http://flicks.com', (res) => {
  res.setEncoding('utf8');
  let rawData = '';

  res.on('data', (chunk) => {
    rawData += chunk;
  });

  res.on('end', () => {

	const regExp = new RegExp("free", "ig");
	const matches = rawData.match(regExp);

	if (matches) {
	  console.log('Found this many occurrences of the string "Free": ', matches.length);
	} else {
	  console.log('String not found.');
	}

  });
}).on('error', (err) => {
  console.error(`Got error: ${err.message}`);
});
