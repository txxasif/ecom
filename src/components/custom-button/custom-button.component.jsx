import React from 'react';
import './custom-button.styles.scss';
const ButtonType = {
    inverted : 'inverted',
}
export default function CustomButton({children,onClick,isGoogleSignIn,btnTyp=''}){

    
    return(
        <button onClick={onClick} className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button ${ButtonType[btnTyp]} `}  >     {children}   </ button>
    )
}