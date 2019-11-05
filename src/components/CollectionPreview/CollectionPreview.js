import React from "react";

import CollectionItem from '../CollectionItem/CollectionItem'

import "./CollectionPreview.sass";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>

    <div className="preview">
      {items
        .filter((items, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
