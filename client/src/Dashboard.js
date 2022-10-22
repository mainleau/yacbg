import Countdown from './Countdown.js';

class Dashboard {
    constructor() {
        this.element = this.create();
    }

    create() {

		const element = document.createElement('div');
		element.style.width = '40vh';
		element.style.height = '90vh';
		element.style.backgroundColor = 'darkgrey';
        element.style.display = 'flex';
        element.style.flexDirection = 'column';

        const components = Array.from({ length: 3 }, (_, index) => {
            const component = document.createElement('div');
            component.style.flex = 1;
            component.style.display = 'flex';
            component.style.flexDirection = index === 2 ? 'column-reverse' : 'column';

            if(index % 2 === 0) {
                const username = document.createElement('span');
                username.style.fontSize = '40px';

                const countdown = document.createElement('div');
                component.append(username, countdown);
            }

            return component;
        });

		element.append(...components);
        return element;
    }

}

export default Dashboard;