const request = require('request');

request.get({
    url : 'http://www.google.com',
    time : true
  },function(err, res){
    if(res.elapsedTime <= 500) {
        console.log('good')
    }
    else if (500 < res.elapsedTime && res.elapsedTime <= 501) {
        console.log('fine')
    }
    else console.log('terrible')
  });