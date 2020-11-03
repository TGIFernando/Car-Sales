export const addFeature = "ADD_FEATURES"
export const deleteFeat = "DELETE_FEATURE"
export const addItem = (id, price) => {
    return {type: addFeature, payload: id, price: price}
}
export const deleteItem = (id, price) => {
    return {type: deleteFeat, payload: id, price: price}
}