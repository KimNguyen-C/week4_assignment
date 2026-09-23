export default{
    addItem(context, payload){
        context.commit("addItem", payload);
    },
    clearItem(context, payload){
        context.commit("clearItem", payload);
    },
    // create updateItem class
    updateItem(context, payload){
        context.commit("updateItem", payload);
    }
}