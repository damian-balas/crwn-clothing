import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

import { selectCollection } from "../../redux/shop/shop.selectors";

import {CollectionContainer, TitleContainer, ItemsContainer} from "./Collection.styles";

const Collection = ({ collection }) => {
  const {title, items} = collection;

  return (
    <CollectionContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {
          items.map(item => <CollectionItem key={item.id} item={item}/>)
        }
      </ItemsContainer>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
