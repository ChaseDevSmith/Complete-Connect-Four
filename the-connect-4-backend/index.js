const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { /* options */ 
cors: {
    origin: "http://localhost:3000"
  }

});

io.on("connection", (socket) => {
  // ...
  socket.emit('init', {data: 'hello world'});
  socket.join("room1")
  socket.on('newGame', handleNewGame)
  console.log(socket, "hey")
  
});

httpServer.listen(8080, ()=>{
    console.log("Sever is running at port 8080...")
});