import * as uuid from 'uuid';

class Game {
	constructor() {
		this.id = uuid.v4();
		this.players = [];
	}

	add(ws) {
		this.players.push(ws);
		ws.send(this.id);
	}
}

export default Game;