const WebSocket = require('ws');
const port = 3002

const wss = new WebSocket.Server({ port: port });

wss.on('connection', (ws) => {
  console.log(`Server is connected on port ${port}`);

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
  });

  setInterval(() => {
    ws.send("SIMULATION STATUS PROJECTEUR 1");
  }, 10000);
});

console.log(`Server started on port ${port}`);

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3001, () => {
  console.log(`Example app listening on port ${port}`)
})
