const https = require('https');
const cheerio = require('cheerio');

https.get('https://www.reddit.com', (res) => {
  console.log(res.statusCode, res.statusMessage);
  res.setEncoding('utf8');
  let rawData = '';

  res.on('data', (chunk) => {
    rawData += chunk;
  });

  res.on('end', () => {
    //console.log(rawData);
	//const $ = cheerio.load(rawData);
	//console.log(res.headers['location']);
	
	const regExp = new RegExp("Trump", "ig");
	const matches = rawData.match(regExp);

	if (matches) {
	  console.log('Found this many occurrences of the string "Trump": ', matches.length);
	} else {
	  console.log('String not found.');
	}

  });
}).on('error', (err) => {
  console.error(`Got error: ${err.message}`);
});
