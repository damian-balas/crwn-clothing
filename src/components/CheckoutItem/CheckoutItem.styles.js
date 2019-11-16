import styled, { css } from "styled-components";

const columnWidth = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  & img {
    width: 100%
    height: 100%
  }
`;

export const NameContainer = styled.span`
  ${columnWidth}
  padding-right: 10px;
`;

export const QuantityContainer = styled.span`
  ${columnWidth}
  display: flex;
`;

export const ArrowContainer = styled.span`
  font-size: 18px;
  cursor: pointer;
`;

export const ValueContainer = styled.span`
  margin: 0 6px
`;

export const PriceContainer = styled.span`
  ${columnWidth}
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px
  cursor: pointer
`;