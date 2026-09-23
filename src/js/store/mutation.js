export default{
    addItem(state, payload){
        state.items.push(payload);
        
        return state;
    },
    clearItem(state, payload){
        state.items.splice(payload.index, 1);
        return state;
    }, 

    // updates the price of an existing item
    // use index to find the item and assign a new price
    updateItem(state, payload){
        const index = payload.index;
        const newPrice = payload.price
        state.items[index].price = newPrice;
        return state;
    }
}