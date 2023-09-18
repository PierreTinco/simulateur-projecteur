const WebSocket = require('ws');

const startPort = 3001;
const numberOfSimulators = 10;

const servers = [];

for (let i = 0; i < numberOfSimulators; i++) {
    const port = startPort + i;
    const wss = new WebSocket.Server({ port: port });

    wss.on('connection', (ws) => {
        console.log(`Simulator ${i + 1} is connected on port ${port}`);

        ws.on('message', (message) => {
            console.log(`[Simulator ${i + 1}] Received: ${message}`);
        });

        setInterval(() => {
            const statuses = ["Activité", "Veille", "Visionnage", "Erreur"];
            const randomIndex = Math.floor(Math.random() * statuses.length);
            ws.send(statuses[randomIndex]);
        }, 10000);
    });

    console.log(`Simulator ${i + 1} started on port ${port}`);
    servers.push(wss);
}
