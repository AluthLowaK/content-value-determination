var http = require('http');
var options = {
    host: 'www.bbc.com',
    path: '/'
};

callback = function(response) {
    var str = '';

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
        str += chunk;
    });



    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {

      var fs = require('fs');
      fs.writeFile("test.html", str, null);

   });
};

http.request(options, callback).end();
