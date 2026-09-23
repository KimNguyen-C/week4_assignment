import Component from '../library/component.js';
import store from '../store/index.js';

export default class List extends Component {
    constructor() {
        super({
            store, element: document.querySelector('.js-items'),
        });
    }

    render() {
        const self = this;
        const items = Array.isArray(store.state.items) ? store.state.items : [];

        if (items.length === 0) {
            self.element.innerHTML = `<p>You currently don't have anything on your wishlist</p>`;
            return;
        }

        // create list of item with price, delete and update button
        self.element.innerHTML = `
            <ul>
                ${items.map((item, index) => {
                    const itemName = item.name;

                    const itemPrice = item.price;

                    return `
                        <li>
                            ${itemName} - $${itemPrice}
                            <button class="delete-btn" type="button" data-index="${index}">Delete Item</button>
                            <input type="number" data-price-input=${index} value="${item.price}"/>
                            <button class="update-price-btn" type="button" data-index="${index}">Update Price</button>
                        </li>
                    `;
                }).join('')}
            </ul>
        `;

        // delete item

        self.element.querySelectorAll('.delete-btn').forEach((button) => {
            button.addEventListener('click', () => {
                const index = Number(button.dataset.index);

                if (!Number.isNaN(index)) {
                    store.dispatch('clearItem', { index });
                }
            });
        });

        // update item
        
        self.element.querySelectorAll('.update-price-btn').forEach((button) => {
            button.addEventListener('click', () => {
                const index = Number(button.dataset.index);
                const input = self.element.querySelector(`[data-price-input="${index}"]`);
                const newPrice = Number(input.value);

            if (!Number.isNaN(newPrice) && newPrice > 0) {
                 store.dispatch('updateItem', { index, price: newPrice });
                }
            });
        });
    }
}