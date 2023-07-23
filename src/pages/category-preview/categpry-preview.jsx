import React from 'react';
import { useSelector } from 'react-redux';
import { CollectionPreview } from '../../components/collection-preview/collection-preview';
import { productsToMap } from '../../redux/reducers/categories/categoriesSelector';
export default function CategoryPreview(){
    const products = useSelector(productsToMap);
  return(
    <div className='shop-page'>
      {Object.keys(products).map((item)=>{
            return <CollectionPreview
            key={item}
            title = {item}
            item={products[item]}
        />
      })}
    </div>
  )
}