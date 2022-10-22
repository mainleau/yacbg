import * as uuid from 'uuid';

class Game {
	constructor() {
		this.id = uuid.v4();
		this.players = [];
	}

	add(ws) {
		this.players.push({
			data: {
				username: 'Player ' + uuid.v4().slice(-3)
			},
			ws
		});
	}

	start() {

		this.players.forEach((player, index) => {
			player.ws.send(JSON.stringify(['game-started',{
				gameId: this.id,
				player: player.data,
				opponent: this.players.find(p => player !== p).data,
				turn: !index
			}]))
		})
	}
}

export default Game;