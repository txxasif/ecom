import CustomButton from "../custom-button/custom-button.component";
import '../cart-dropdown/cart-dropdown.scss';
import { CartItem } from "../cart-items/cart-items.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contex";
import { useNavigate } from "react-router-dom";
export const CartDown = () => {
    const navigate = useNavigate();
    const {cartItems} = useContext(CartContext);
    const navigateToCheckOut = () => {
        navigate(`/checkout`);
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
            { cartItems.map((item)=><CartItem  key={item.id} cartItem={item}/>)}

            </div>
            <CustomButton onClick={navigateToCheckOut}>GO TO CHECK</CustomButton>
        </div>
    )
 }