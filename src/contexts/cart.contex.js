 import { useState, createContext, useEffect } from "react";

 const addItem = (cartItems,productToAdd) => {
      const existingCartItems = cartItems.find(items => items.id === productToAdd.id);
      
      if(existingCartItems){
        return cartItems.map(item=>item.id===productToAdd.id?{...item,quantity:item.quantity+1}:item)
      }
      return [...cartItems,{...productToAdd,quantity:1}]
 }
 const removeItem = (cartItems,productToRemove) => {
    const existingCartItems = cartItems.find(items => items.id === productToRemove.id);
    if(existingCartItems.quantity === 1){
        return cartItems.filter(item=> item.id !== productToRemove.id)
      }else if(existingCartItems.quantity > 1){
      return cartItems.map(item=>item.id===productToRemove.id?{...item,quantity:item.quantity-1}:item)
    }
    return [...cartItems,{...productToRemove,quantity:1}]
}
const removeItem2 = (cartItems,productToRemove) => {
    const existingCartItems = cartItems.find(items => items.id === productToRemove.id);
    if(existingCartItems){
        return cartItems.filter(item=> item.id !== productToRemove.id)
      }
}
export const CartContext = createContext({
    visible: false,
    setVisible: () => {},
    cartItems : [],
    itemsCounts: 0,
    addItemToCart : () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    total: 0
});

export const CartProvider =  ({children}) => {
    const [visible,setVisible] = useState(true);
    const [cartItems,setCartItems] = useState([]);
    const [itemsCounts,setItems] = useState(0);
    const [total,setTotal]  = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addItem(cartItems,productToAdd));
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeItem(cartItems,productToRemove));
    }
    const clearItemFromCart = (productToRemove) => {
         setCartItems(removeItem2(cartItems,productToRemove));
    }
    useEffect(()=>{
        const totalItems = cartItems.reduce((total,item)=>total+item.quantity*item.price,0);
        setTotal(totalItems);
    },[cartItems])
    useEffect(()=>{
        const cartC = cartItems.reduce((total,item)=>item.quantity+total,0);
        setItems(cartC);
    },[cartItems])
    const value = {visible,setVisible,addItemToCart,cartItems,itemsCounts,removeItemFromCart,clearItemFromCart,total};
    return     <CartContext.Provider value={value} >{children} </CartContext.Provider>

}