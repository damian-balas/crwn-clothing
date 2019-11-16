import React from 'react'

import {CartItemContainer, ItemDetailsContainer, ImageContainer, NameContainer} from './CartItem.styles';

const CartItem = ({ item: {imageUrl, price, name, quantity}}) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt={name}/>
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <span className="price">{quantity} x ${price}</span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem