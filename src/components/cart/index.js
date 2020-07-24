import React, { useEffect } from 'react';
import { ElevatedBox, HeadingLabel } from '../../uiComponents';
import styled from 'styled-components';
import EachItem from './eachItem';
const CartSection = styled.section`
	grid-area: shoppingCart;
`;
const Price = styled.h4`
	text-align: right;
	font-size: 1.3rem;
	margin-top: 15px;
`;

const Cart = () => {
	return (
		<CartSection>
			<ElevatedBox className='cart_elevated'>
				<HeadingLabel className='cart_heading'>Shopping Cart</HeadingLabel>
				<EachItem />
				<EachItem />
				<EachItem />
				<Price>Total: 400$</Price>
			</ElevatedBox>
		</CartSection>
	);
};

export default Cart;
