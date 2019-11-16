import React from "react";
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import {CheckoutContainer,CheckoutHeaderContainer,HeaderBlockContainer,TotalContainer} from "./Checkout.styles";

const Checkout = ({cartItems, total}) => (
  <CheckoutContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {
      cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
    }
    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);
