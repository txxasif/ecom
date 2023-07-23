import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Routes,Route} from 'react-router-dom';
import { getCategoriesAndDocs } from '../../firebase/firebase.utils';
import { setProducts } from '../../redux/reducers/categories/categories.reducers';
import CategoryPreview from '../category-preview/categpry-preview';
import { Category } from '../category/category';
export const Shop = () => {
    const dispatch = useDispatch();
useEffect(()=>{
    const setP = async ( ) => {
        const categoryArray = await getCategoriesAndDocs();
        dispatch(setProducts(categoryArray));
    }
    setP();
},[dispatch])
    return(
        <Routes>
            <Route index element={<CategoryPreview/>} />
            <Route path=':category' element={<Category /> } />
        </Routes>
    )
}

