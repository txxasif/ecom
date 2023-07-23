import React from "react";
import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contex";

export default function CollectionItem({item}){
    const {addItemToCart} = useContext(CartContext);
    const {name,price,imageUrl,id} = item;
    const addProductToCart = () => {addItemToCart(item);
    }
    return(
        <div key={id} className="collection-item">
            <div className="image" 
            style={{backgroundImage:`url(http://localhost:3000/${imageUrl})`}} />
                <div className="collection-footer">
                        <span className="name">{name}</span>
                        <span className="price">{price}</span>
                </div>
                <CustomButton onClick={addProductToCart} btnTyp="inverted">Add to Cart</CustomButton>
            </div>

    )
}