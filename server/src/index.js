import { WebSocketServer } from 'ws';
import { Collection } from '@discordjs/collection';
import Game from './structures/Game.js';

const Server = new WebSocketServer({ port: 3550 });
const Games = new Collection();

Server.on('connection', ws => {
	if (!(Games.last()?.players.length % 2)) {
		const game = new Game();
		game.add(ws);
		Games.set(game.id, game);
	} else {
		Games.last().add(ws);
	}
	console.log(Games);
});