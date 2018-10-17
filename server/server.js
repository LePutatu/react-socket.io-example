const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval.localInterval);
    console.log(interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval.localInterval);
  });
  client.on("disconnect", () => console.log("Client disconnected"));
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
