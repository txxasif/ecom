import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
export const CollectionPreview = ({item,title}) => {
        return(
            <div className="collection-preview">
                <Link to={title}>{ title.toUpperCase()}</Link>
                <div className="preview">
                    {item.filter((item,idx)=>idx<4).map((item)=>(<CollectionItem key={item.id} item={item}  />))}
                </div>
            </div>
        )
}