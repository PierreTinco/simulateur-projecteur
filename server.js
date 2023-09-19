const WebSocket = require('ws');
const port = 3001;

const wss = new WebSocket.Server({ port: port });

wss.on('connection', (ws) => {
  console.log(`Server is connected on port ${port}`);

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
  });

  setInterval(() => {
    const statuses = ["Activité", "Veille", "Visionnage", "Erreur"];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    ws.send(statuses[randomIndex]);
  }, 10000);
});

console.log(`Server started on port ${port}`);
