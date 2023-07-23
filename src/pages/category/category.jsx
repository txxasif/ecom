import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.component";
export const Category =  ( ) => {
     const { category } = useParams();
     const products  = useSelector((state)=>state.products.categories[category]);
     const [categoryItems,setCategoryItems] = useState([]);
     useEffect(()=>{
      setCategoryItems(products);
     },[categoryItems,products]);
     return(
      <div className="collection-preview">
      <h1 className="title">{ category.toUpperCase()}</h1>
      <div className="preview">
          {categoryItems && categoryItems.map((item)=>(<CollectionItem key={item.id} item={item}  />))}
      </div>
  </div>
     )
}