
const WebSocket = require('ws');

class Socket {
  constructor() {
    this.clients = {};
    this.connectionCounter = 0;
    this.wss = new WebSocket.Server({ port: 8080 });
    this.wss.on('connection', (ws) => this._newConnection(ws));
  }

  _newConnection(ws) {
    ws.id = this.connectionCounter++;
    this.clients[ws.id] = ws;

    ws.on('close', () => {
      delete this.clients[ws.id];
    });
  }
  
  sendAll(data) {
    for(let prop in this.clients) {
      if(!this.clients.hasOwnProperty(prop)) continue;
      this.clients[prop].send(JSON.stringify(data));
    }
  }
}

module.exports = new Socket();