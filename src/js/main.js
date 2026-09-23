import store from './store/index.js';
import List from './component/list.js';
import Status from './component/status.js';

const formEl = document.querySelector('.js-form');
const inputEl = document.querySelector('.new-item-field');
const priceEl = document.querySelector('.price-field');
const errorEl = document.querySelector('.error');


formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = inputEl.value.trim();
    const cost = Number(priceEl.value);

    if (value.length >= 3 && cost > 0) {
        store.dispatch('addItem', {
            name: value,
            price: cost
        });

        errorEl.innerHTML = '';
        formEl.reset();
    } else {
        errorEl.innerHTML = 'Enter a valid item and price';
    }
});

const listInstance = new List();
const statusInstance = new Status();
listInstance.render();
statusInstance.render();

