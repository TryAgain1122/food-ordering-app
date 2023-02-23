import React from "react";


const CartContext = React.createContext({
    items: [],
    totalAmountL: 0,
    addItem: () => {},
    removeItem: (id) => {}
});

export default CartContext;