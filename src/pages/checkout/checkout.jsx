import './checkout.styles.scss';
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contex";
import { CheckOutItem } from "../../components/checkout-item/checkout.component";
 export const CheckOut = () => {
    const {cartItems,total} = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block"> <span>Product</span> </div>
                <div className="header-block"> <span>Description</span> </div>
                <div className="header-block"> <span>Quantity</span> </div>
                <div className="header-block"> <span> Prince</span></div>
                <div className="header-block"> <span>Remove</span></div>
            </div> 
           
                {cartItems.map((item)=>{
                        return (
                           <CheckOutItem key={item.id} cartItem={item} />
                        )
                    })
                }
                <span className="total">Total : {total}</span>
        </div>
    )
 }