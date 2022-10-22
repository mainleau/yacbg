window.onload = () => {
	document.body.style.margin = '0px';
	document.body.style.height = '100vh';
	document.body.style.backgroundColor = 'lightblue';
	document.body.style.display = 'flex';
	document.body.style.justifyContent = 'center';
	document.body.style.alignItems = 'center';
	new Board();
}

class Game {
  constructor(params) {

  }

	start() {
		new Board();
		console.log(this.socket);
	}
}

class Board {
	constructor() {
		this.board = this.create();
		document.body.appendChild(this.board);

		const dashboard = document.createElement('div');
		dashboard.style.width = '40vh';
		dashboard.style.height = '90vh';
		dashboard.style.backgroundColor = 'darkgrey';

		const playerDiv = document.createElement('div');

		const players = document.createElement('span');
		players.textContent = 'Players';
		players.style.fontSize = '50px';

		playerDiv.appendChild(players);
		dashboard.append(playerDiv);

		const playerList = document.createElement('div');
		playerDiv.appendChild(playerList)
		document.body.appendChild(dashboard);

		window.socket = this.socket = new WebSocket('ws://localhost:3550');

		this.socket.onmessage = ({ data }) => {
			const message = document.createElement('span');
			message.textContent = JSON.parse(data).username;
			playerList.appendChild(message);
		}
	}

	create() {
		const container = document.createElement('div');
		container.style.display = 'flex';
		container.style.justifyContent = 'center';

		const element = document.createElement('div');
		element.id = 'board';
		element.style.backgroundColor = 'darkblue';
		element.style.width = '90vh';
		element.style.height = '90vh';
		element.style.position = 'relative';

		const piece = document.createElement('div')
		piece.style.backgroundColor = 'black';
		piece.style.backgroundSize = 'contain';
		piece.style.position = 'absolute';
		piece.style.width = '12.5%';
		piece.style.height = '12.5%';
		piece.style.backgroundRepeat = 'no-repeat';
		piece.style.zIndex = 1;

		Array.from({ length: 32 }, (_, id) => {
			let p = piece.cloneNode();
			p.style.transform = `translate(${id % 8 * 100}%, ${id < 8 ? 0 : id < 16 ? 100 : id < 24 ? 600 : 700}%)`;
			element.appendChild(p);
		});

		container.appendChild(element);
		return container;
	}
}