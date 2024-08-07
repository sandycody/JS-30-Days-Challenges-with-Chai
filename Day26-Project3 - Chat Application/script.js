const socket = new WebSocket('ws://localhost:8080');
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
let username = "";

function setUsername() {
    const usernameDisplay = document.getElementById('username-display');
    usernameDisplay.textContent = `Logged in as: ${username}`;
}

// Function to display received messages
function displayReceivedMessage(message, username) {
    const messageItem = document.createElement('li');
    messageItem.classList.add('align-left');
    const textMessage = document.createElement('p');
    textMessage.textContent = message;
    const usernameEl = document.createElement('span');
    usernameEl.classList.add('username', 'message-username-left');
    usernameEl.textContent = username;

    messageItem.appendChild(textMessage);
    messageItem.appendChild(usernameEl);
    chatBox.appendChild(messageItem);

    scrollToBottom();
}

// Function to display sent messages
function displaySentMessage(message, username) {
    const messageItem = document.createElement('li');
    messageItem.classList.add('align-right');
    const textMessage = document.createElement('p');
    textMessage.textContent = message;
    const usernameEl = document.createElement('span');
    usernameEl.classList.add('username', 'message-username-right');
    usernameEl.textContent = username;

    messageItem.appendChild(textMessage);
    messageItem.appendChild(usernameEl);
    chatBox.appendChild(messageItem);

    scrollToBottom();
}

function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}

socket.addEventListener('open', () => {
    console.log('Connected to server');
});

socket.addEventListener('message', (event) => {
    try {
        const { type, message, username } = JSON.parse(event.data);
        console.log(event.data);
        if (type === 'message') {
            displayReceivedMessage(message, username);
        }
    } catch (error) {
        console.error('Error parsing message:', error);
    }
});

socket.addEventListener('close', () => {
    console.log('Disconnected from WebSocket server');
});

socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
});

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    if (!username) {
        username = prompt("Please enter a username");
        setUsername();
    }
    const input = document.getElementById("message-input");
    const message = input.value;

    if (message) {
        displaySentMessage(message, username);
        socket.send(JSON.stringify({ type: "message", message, username }));
        input.value = "";
        console.log(`Sent: ${message}`);
    }
}
