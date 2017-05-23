module.exports = function (io) {
    io.on('connection', function(socket){
         socket.on('motor1', function(zustand){
             var request = require("request");
             if(zustand == 0)
             {
                 request("http://127.0.0.1:8000/?motor=1&status=0", function(error, response, body) {
                     if(error)console.log('error:', error);
                     console.log(body);
                    });
             }
             else if(zustand == 1)
             {
               request("http://127.0.0.1:8000/?motor=1&status=1", function(error, response, body) {
                     if(error)console.log('error:', error);
                     console.log(body);
                    });
             }
            else if(zustand == -1)
             {
                 request("http://127.0.0.1:8000/?motor=1&status=-1", function(error, response, body) {
                     if(error)console.log('error:', error);
                     console.log(body);
                    });
             }
             console.log(zustand);
         });


        socket.on('motor2', function(zustand){
             var request = require("request");
             if(zustand == 0)
             {
                 request("http://127.0.0.1:8000/?motor=2&status=0", function(error, response, body) {
                     if(error)console.log('error:', error);
                     console.log(body);
                    });
             }
             else if(zustand == 1)
             {
               request("http://127.0.0.1:8000/?motor=2&status=1", function(error, response, body) {
                     if(error)console.log('error:', error);
                     console.log(body);
                    });
             }
            else if(zustand == -1)
             {
                 request("http://127.0.0.1:8000/?motor=2&status=-1", function(error, response, body) {
                     if(error)console.log('error:', error);
                     console.log(body);
                    });
             }
             console.log(zustand);
         });
    });
}