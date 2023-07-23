import {createContext,useEffect,useState} from 'react';
import { getCategoriesAndDocs } from '../firebase/firebase.utils';
//import { addCollectionAndDocFromAuth } from '../firebase/firebase.utils';
//import SHOP_DATA from '../pages/shop/shop.data';

export const ProductContext = createContext({
    products: [],
});

export const ProductProvider = ({children}) => {
    // useEffect(()=>{
    //     addCollectionAndDocFromAuth('categories',SHOP_DATA);
    // })
    const [products,setProducts] = useState({});
    useEffect(()=>{
        const setP = async ( ) => {
            let p = await getCategoriesAndDocs();
            setProducts(p);
        }
        setP();
    },[])
    
    const value = {products,setProducts};
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}