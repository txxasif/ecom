import { Link } from 'react-router-dom';
import './header.styles.scss';
import { authentication } from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../crown.svg';
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { CartIcon } from '../cart-icon/cart';
import { CartDown } from '../cart-dropdown/cart-dropdown.component';
//import { CartContext } from '../../contexts/cart.contex';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/reducers/user/user.reducer';
import { selectCurrentUser } from '../../redux/reducers/user/useSelector';
import { cartVisibleSelector } from '../../redux/reducers/cartReducers/cartSelector';
export default function Header(){
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);
   // const {visible} = useContext(CartContext);
   const visible = useSelector(cartVisibleSelector);
    const sign_Out = async () => {
        authentication.signOut();
        dispatch(setCurrentUser(null));
    }
    return(
       <Fragment>
         <div className='header'>
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>Shop</Link>
                <Link className="option" to='/about'>About</Link>
                {user ? <div className="option" onClick={sign_Out}>Sign Out</div> : 
                <Link className="option" to='/sign-in'>Sign In</Link>}
                <CartIcon />
            </div>
           {  visible ? <CartDown /> : ''}
        </div>
        <Outlet />
       </Fragment>
    )
}