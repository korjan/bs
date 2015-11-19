var express = require('express');
var app = express();

// Get all the bullshit links for this url
// GET /bs?referer=http://www.nu.nl/media/4056880/giel-beelen-biedt-excuses-oproep-cola-potloodtest.html
app.get('/bs', function(req, res) {
  referer = req.query.referer;
  result = bs(referer);
  res.json(result);
});

// TODO: GET /bs?url=http://www.spitsnieuws.nl/raar/2015/05/holdacokewithyourboobschallenge-is-beste-trend-ooit'
// GET the data for this url

// POST bullshit links
// body url=http://www.spitsnieuws.nl/raar/2015/05/holdacokewithyourboobschallenge-is-beste-trend-ooit
// header token=APITOKEN
app.post('/bs', function(req, res) {
  url = req.query.url;
  token = req.headers.token;
  console.log('receiving bs', url, token);
  // todo: store marked as bs for this user
  res.end();
});

// Start the server
var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening to bs at http://%s:%s', host, port);
});

// To determine the bullshit links on a page,
var bs = function bs(referer){
  hrefs = hrefsOnPage(referer);

  results = [];
  hrefs.forEach(function(href){
    result = {link : href, about : bsData(href)};
    results.push(result);
  });

  return results;
}

// TODO: determine this clientside, just POST a list of links to /bs
var hrefsOnPage = function hrefsOnPage(url){
  // url = http://www.nu.nl/media/4056880/giel-beelen-biedt-excuses-oproep-cola-potloodtest.html
  return ['http://www.spitsnieuws.nl/raar/2015/05/holdacokewithyourboobschallenge-is-beste-trend-ooit', 'http://giel.vara.nl/home/opening-item/artikel/34496-hold-a-coke-with-your-boobs-challenge/'];
}

// TODO: get this data from a db
var bsData = function bsData(url){
    if (url == 'http://www.spitsnieuws.nl/raar/2015/05/holdacokewithyourboobschallenge-is-beste-trend-ooit'){
      return ['http://www.nu.nl/media/4152866/stekker-website-spitsnieuws-getrokken.html']
    }
    return [];
}

// about: publisher
// about: writer
// about: sources

// determine topics
// determine related events
