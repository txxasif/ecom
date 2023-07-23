 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import {getFirestore,getDoc, doc,setDoc,collection,writeBatch, query,getDocs} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACmwJny4dIKj2eNf9zjJBh7RXQYYLYOoA",
  authDomain: "crwn-ecmrc.firebaseapp.com",
  projectId: "crwn-ecmrc",
  storageBucket: "crwn-ecmrc.appspot.com",
  messagingSenderId: "244151740534",
  appId: "1:244151740534:web:15c063b1975a1f6bc9d757",
  measurementId: "G-KTN9Z0281X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const firestore = getFirestore(app);

export const createUserProfileDocument = async (email,uid,displayName)=>{
  const userRef = doc(firestore,'users',uid);
  const snapShot =  await getDoc(userRef);
  if(!snapShot.exists()){
    const createdAt = new Date();
          try{
              await setDoc(userRef,{
                uid,
                email,
                createdAt,
                displayName,
              });

              console.log('success');
              
          }catch(err){
              console.log(err.message);
          }
  }
  return userRef;
}
export const addCollectionAndDocFromAuth = async (collectionKey,objectToAdd ) => {
   const collectionRef = collection(firestore,collectionKey);
   const batch = writeBatch(firestore);
   objectToAdd.forEach((object)=>{
    const docRef = doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef,object);
   });
   await batch.commit();
   console.log('done ');

}

// export const getCategoriesAndDocs = async () => {
//   const collectionRef = collection(firestore,'categories');
//   const q = query(collectionRef);
//   const querySnapshot = await getDocs(q);
//   const categoryMap = querySnapshot.docs.reduce((acc,snap)=>{
//     const {items,title} = snap.data();
//     acc[title.toLowerCase()] = items;
//     return acc;
//   },{});
//   console.log(categoryMap);
//   return categoryMap;
// }

export const getCategoriesAndDocs = async () => {
  const collectionRef = collection(firestore,'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryArray =  querySnapshot.docs.map((docSnap)=>docSnap.data());
  return categoryArray;
  
}


const provider =  new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(authentication,provider);
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(authentication,callback);

export default firebase;