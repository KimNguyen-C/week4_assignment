import Component from '../library/component.js';
import store from '../store/index.js';

export default class Status extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.js-status'),
        });
    }

    render() {
    const items = store.state.items;

    const total = items.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    this.element.innerHTML = `
        <h3>Total: $${total}</h3>
    `;
}
}