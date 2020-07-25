import React from 'react';
import styled from 'styled-components';
import Products from '../../components/products';
import Cart from '../../components/cart';
import Inventory from '../../components/inventory';

const ProductPageSection = styled.article`
	padding-top: 80px;
	font-size: 1rem;
	background-color: ${(props) => props.theme.background};
	min-height: 100vh;
	padding: 30px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: 15px;
	border: none;
	grid-template-areas: 'listOfProducts shoppingCart inventory';
`;
const AProductPage = ({ globalState, dispatch }) => {
	return (
		<ProductPageSection>
			<Products products={globalState.products} dispatch={dispatch} />
			<Cart products={globalState.products} dispatch={dispatch} />
			<Inventory products={globalState.products} dispatch={dispatch} />
		</ProductPageSection>
	);
};

export default AProductPage;
