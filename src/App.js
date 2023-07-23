import { useEffect } from 'react';
import { Route,Routes} from 'react-router-dom';
import { CheckOut } from './pages/checkout/checkout';
import { Shop } from './pages/shop/shop';
import { onSnapshot } from 'firebase/firestore';
import { authentication,createUserProfileDocument} from './firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/reducers/user/user.reducer';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
        let unSubscribeFromAuth = null;
        unSubscribeFromAuth = authentication.onAuthStateChanged(async user=>{
          if(user){
            const {email,uid,displayName} = user;
            const userRef = await createUserProfileDocument(email,uid,displayName);
            onSnapshot(userRef,snap=>{
                setCurrentUser({
                    id: snap.id,
                    ...snap.data()
                })
            })
    
          }
          dispatch(setCurrentUser(user));
        })
        return () => {
          unSubscribeFromAuth();
        }
      },[dispatch])
  return (
    <div>
      <Routes>
        <Route path="/" element ={<Header />} >
              <Route index element={<HomePage />} />
              <Route path="/shop/*" element={<Shop />} />
              <Route path="/sign-in" element={<SignInAndSignUp />} />
              <Route path="/checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
