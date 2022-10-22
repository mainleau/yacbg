import Board from './Board.js';

window.onload = () => {
	document.body.style.margin = '0px';
	document.body.style.height = '100vh';
	document.body.style.backgroundColor = 'royalblue';
	document.body.style.display = 'flex';
	document.body.style.justifyContent = 'center';
	document.body.style.alignItems = 'center';
	new Board();
}