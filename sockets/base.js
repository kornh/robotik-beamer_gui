module.exports = function (io) {
    io.on('connection', function(socket){
         socket.on('motor1', function(zustand){
             var request = require("request");
             if(zustand == 0)
             {
                 request("http://127.0.0.1:8000/?relay=0&status=0", function(error, response, body) {
                     console.log('error:', error);
                     console.log(body);
                    });

                 request("http://127.0.0.1:8000/?relay=1&status=0", function(error, response, body) {
                     console.log('error:', error);
                     console.log(body);
                    });
             }
             else if(zustand == 1)
             {
               request("http://127.0.0.1:8000/?relay=1&status=0", function(error, response, body) {
                     console.log('error:', error);
                     console.log(body);
                    request("http://127.0.0.1:8000/?relay=0&status=1", function(error, response, body) {
                        console.log('error:', error);
                        console.log(body);
                        });
                    });
             }
            else if(zustand == -1)
             {
                 request("http://127.0.0.1:8000/?relay=0&status=0", function(error, response, body) {
                     console.log('error:', error);
                     console.log(body);
                    request("http://127.0.0.1:8000/?relay=1&status=1", function(error, response, body) {
                        console.log('error:', error);
                        console.log(body);
                        });
                    });
             }
             console.log(zustand);
         });
    });
}