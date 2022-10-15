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
	}
}

class Board {
	constructor() {
		this.board = this.create();
		document.body.appendChild(this.board);
		this.spawnPieces();
	}

	create() {
		const container = document.createElement('div');
		container.style.display = 'flex';
		container.style.justifyContent = 'center';

		const element = document.createElement('div');
		element.id = 'board';
		element.style.backgroundColor = 'darkblue';
		element.style.border = 'darkblue solid 3px';
		element.style.width = '900px';
		element.style.height = '900px';
		element.style.display = 'grid';
		element.style.gridTemplateColumns = 'repeat(8, 1fr)';
		element.style.columnGap = '1px';
		element.style.rowGap = '1px';

		Array.from({ length: 64 }, () => {
			let cell = document.createElement('div');
			cell.className = 'cell';
			cell.style.position = 'relative';
			cell.style.backgroundColor = 'skyblue';
			element.appendChild(cell);
		});

		container.appendChild(element);
		return container;
	}

	spawnPieces() {	

		const piece = document.createElement('div')
		piece.style.backgroundColor = 'black';
		piece.style.backgroundSize = 'contain';
		piece.style.position = 'absolute';
		piece.style.width = '100%';
		piece.style.height = '100%';
		piece.style.zIndex = 1;
		Array.from(document.getElementsByClassName('cell'), (element, id) => {
			let p = piece.cloneNode();
			if (id >= 8 && id <= 15 || id >= 48 && id < 56) element.appendChild(p);
		});
	}
}