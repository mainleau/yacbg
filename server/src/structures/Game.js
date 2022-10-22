import * as uuid from 'uuid';

class Game {
	constructor() {
		this.id = uuid.v4();
		this.players = [];
	}

	add(ws) {
		this.players.push(ws);
		ws.send(JSON.stringify({ gameId: this.id, username: 'Player ' + uuid.v4().slice(-3) }))
	}
}

export default Game;