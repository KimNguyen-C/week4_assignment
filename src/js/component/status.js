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

    // this is to create the total amount of items
    // using reduce() to calculate the total price of all items on the list
    const total = items.reduce((sum, item) => {
        return sum + item.price;
    }, 0);


    // display the total amount
    this.element.innerHTML = `
        <h3>Total: $${total}</h3>
    `;
}
}