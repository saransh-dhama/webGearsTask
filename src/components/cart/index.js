import React from 'react';
import { func, array } from 'prop-types';
import { ElevatedBox, HeadingLabel } from '../../uiComponents';
import styled from 'styled-components';
import EachItem from './eachItem';
import { removeFromCart, reduceItemQunatityInCart } from '../../store/actions';

const CartSection = styled.section`
	grid-area: shoppingCart;
`;
const Price = styled.h4`
	text-align: right;
	font-size: 1.3rem;
	margin-top: 15px;
	color: ${(props) => props.theme.primaryColor};
	padding-right: 30px;
	padding-bottom: 15px;
`;
const EmptyCart = styled.p`
	text-align: center;
	font-size: 1.3rem;
	margin-top: 15px;
	opacity: 0.2;
`;

const Cart = ({ products, dispatch }) => {
	const cartItems = products.filter((product) => product.orderQuantity > 0);
	const totalCost = cartItems.reduce((sum, item) => {
		return sum + item.price * item.orderQuantity;
	}, 0);
	return (
		<CartSection>
			<ElevatedBox className='cart_elevated'>
				<HeadingLabel className='cart_heading'>Shopping Cart</HeadingLabel>
				{cartItems.length ? (
					cartItems.map((item) => {
						return (
							<EachItem
								key={item.id}
								product={item}
								remove={() => dispatch(removeFromCart(item))}
								reduce={() => dispatch(reduceItemQunatityInCart(item))}
							/>
						);
					})
				) : (
					<EmptyCart>Cart Empty</EmptyCart>
				)}
				{cartItems.length > 0 && <Price>Total: {totalCost}$</Price>}
			</ElevatedBox>
		</CartSection>
	);
};
Cart.propTypes = {
	products: array.isRequired,
	dispatch: func.isRequired,
};
export default Cart;
