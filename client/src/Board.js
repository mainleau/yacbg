import Countdown from './Countdown.js';
import Dashboard from './Dashboard.js';

class Board {
	constructor() {
		this.element = this.create();
        this.dashboard = new Dashboard();
        document.body.append(this.element, this.dashboard.element);

		window.socket = this.socket = new WebSocket('ws://localhost:3550');

		window.c = this.countdowns = [new Countdown(10 * 60), new Countdown(10 * 60)]

		this.socket.onmessage = message => {
			const [event, data] = JSON.parse(message.data);
			if (event === 'game-started') {
				this.dashboard.element.children[0].children[0].textContent = data.opponent.username;
				this.dashboard.element.children[2].children[0].textContent = data.player.username;

				this.dashboard.element.children[0].append(this.countdowns[0].element);
				this.dashboard.element.children[2].append(this.countdowns[1].element);

				this.countdowns[+data.turn].resume();
			}
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

export default Board;