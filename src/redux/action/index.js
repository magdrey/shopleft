// For add item to Cart
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}
// For delete item from Cart
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}


// dele cart

export const delall = (product) => {
    return{
        type : "DELCART",
        payload : product
    }
}


//remove item

export const remCart = (product) => {
    return{
        type : "REMITEM",
        payload : product
    }
}


