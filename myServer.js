var http = require('http');
var url = require('url');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'Kk8tac5lsIOFKGjiPHYnrZRzs',
  consumer_secret: '7BTejv8S0P8nBpl1VD45G7kKgSpyk0Q1ALyaRRnpl1CsqSmKvw',
  access_token_key: '99572072-3ljfWxKAGSwRkcSkgh7nW5JbxtoZ0Cbjop9Xm9nZo',
  access_token_secret: '3V8I1yBunZ3RxZ3mLTQWRLiIgpWKBfoS30OyHZ4gAtIxz'
});
 


var server = http.createServer(function(request, response){
    //response.end('my Server #1');
    //response.end('My Twiiter handle: praveenperuri');
    //calling twiiter
    var params = {screen_name: 'praveenperuri'};
    client.get('statuses/user_timeline', params, function(error, tweets, twitRes) {
        if (!error) {
            response.end(JSON.stringify(tweets));
        }
    });
});

server.listen(8080, function(){
    console.log('You are listening at: 8080 on myServer #1');
    // //calling twiiter
    // var params = {screen_name: 'praveenperuri'};
    // client.get('statuses/user_timeline', params, function(error, tweets, response) {
    //     if (!error) {
    //         console.log(tweets);
    //     }
    // });
});