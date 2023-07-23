import { ReactComponent as ShoppingIcon } from '../../shopping-bag.svg';
import './cart.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contex';
import { useDispatch,useSelector } from 'react-redux';
import { cartVisibleSelector } from '../../redux/reducers/cartReducers/cartSelector';
import { setVisible } from '../../redux/reducers/cartReducers/cartReducers';
export const CartIcon = () => {
    const dispatch = useDispatch();
    const visible = useSelector(cartVisibleSelector);
    const result = visible ? false : true;
    const { itemsCounts:items } = useContext(CartContext);
    const changeCart = () => {
        dispatch(setVisible(result));
    }
        return(
            <div  onClick={changeCart} className="cart-icon-container">
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">{items}</span>
            </div>
            
        )
}