import socketIOClient from "socket.io-client";

export default class DominoesClient {
    constructor(host) {
        this.host = host;
        this.socket = null;
        this.updateGameState = null;
        this.canStart = null;
    } 

    registerEvents(updateGameState, canStart) {
        this.updateGameState = updateGameState;
        this.canStart = canStart;
    }

    createGame(playerHost) {
        this._getSocket().emit("createGame", playerHost);
    }

    startGame(gameId) {
        this._getSocket().emit("startGame", gameId);
    }

    addPlayer(username, roomId) {
        this._getSocket().emit("addPlayer", { username, roomId });
    }
    
    playCard(roomId, card, side) {
        this._getSocket().emit("playCard", { roomId, card, side });
    }

    passTurn(gameId) {
        this._getSocket().emit("passTurn", gameId);
    }

    _getSocket() {
        if(!this.socket) {
            this.socket = socketIOClient(this.host);
            this.socket.on("state", this.updateGameState);
            this.socket.on("start", this.canStart);
        }
        return this.socket;
    }
}