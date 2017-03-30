module.exports = function (io) {
    io.on('connection', function(socket){
         socket.on('motor1', function(zustand){
             console.log(zustand);
         });
    });
}