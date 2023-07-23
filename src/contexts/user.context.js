import  {createContext ,useState,useEffect} from 'react';
import { authentication,createUserProfileDocument } from '../firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
export const userContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};

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
          setCurrentUser(user)
        })
        return () => {
          unSubscribeFromAuth();
        }
      },[])

    return <userContext.Provider value={value}>{children }</userContext.Provider>
}