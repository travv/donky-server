const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');
const game = require('./models/game');

// TODO: ADD A TOP-LEVEL FILE COMMENT TO THIS FILE
// TODO: REMOVE ANY UNNECESSARY LINES FROM THIS FILE
// TODO: Make the bulk of this file be a function that is called at the bottom of this file


// Add server and io initialization
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Enable/disable cors (cross-origin resource sharing) if necessary
app.use(cors());

// Enable static assets from folder static
app.use(express.static('static'));
app.set('view engine', 'ejs');

// Enable JSON message body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Get IDs of connected clients
let ids = Object.keys(io.sockets.clients().connected);

// Create actual Game object
const Game = game.Game;
const pokerGame = new Game();

// Default index route
app.get('/', (req, res) => {
  res.send(ids);
});

// When clients connect, add players as appropriate
io.on('connection', (socket) => {
  pokerGame.addPlayer({ id: socket.id, name: 'hey' });
  ids = Object.keys(io.sockets.clients().connected);
  socket.emit('users', ids);

  console.log('howd', socket.id);

  socket.on('connect', () => {
    io.emit(ids);
  });
});


// START THE SERVER
// =============================================================================
const port = process.env.PORT || 9090;
server.listen(port);

console.log(`listening on: ${port}`);
