import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contex';
import './checkout.styles.scss';

export const CheckOutItem = ({cartItem}) => {
    const {clearItemFromCart,addItemToCart,removeItemFromCart} = useContext(CartContext);
    const { name, imageUrl , price , quantity } = cartItem;
    const decrease = () => removeItemFromCart(cartItem);
    const increase = () => addItemToCart(cartItem);
    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className='arrow' onClick={decrease}>&#10094;</div>
                <span className='value'>{quantity} </span>
                <div className="arrow" onClick={increase}>&#10095;</div>
                </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}