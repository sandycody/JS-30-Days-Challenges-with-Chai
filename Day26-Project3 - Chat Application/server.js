import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('Client connected');

    ws.on('message', function message(data, isBinary) {
        const parsedData = JSON.parse(data);
        const { type, message, username } = parsedData;

        console.log(`Received ${type}: ${message} from ${username}`);

        // Broadcast the received message to all connected clients except the sender
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type: 'message', message, username }), { binary: isBinary });
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', (error) => {
        console.error('WebSocket error: ', error);
    });

    ws.send(JSON.stringify({ type: 'message', username: 'Server', message: 'Welcome to the chat!' }));
});

console.log('WebSocket server is running on ws://localhost:8080');
