import { createSelector } from "@reduxjs/toolkit";
const selectCategories = (state)=> {
  console.log('cats',state.products);
  return  state.products;
};

export const productSelector = createSelector([selectCategories],
  (productsReducer)=>{
    console.log('cats1 ',productsReducer.categories);
    return productsReducer.categories;
})

export const productsToMap = createSelector([productSelector],
    (products)=>{
      console.log('cats 2',products);
      return products.reduce((acc,data)=>{
        const {items,title} = data;
        acc[title.toLowerCase()] = items;
        return acc;
      },{});
    }
  )




// state.products.categories.reduce((acc,data)=>{
//   const {items,title} = data;
//   acc[title.toLowerCase()] = items;
//   return acc;
// },{});
