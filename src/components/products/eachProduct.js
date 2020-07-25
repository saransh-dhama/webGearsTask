import React from 'react';
import styled from 'styled-components';
const Product = styled.div`
	display: grid;
	grid-template-columns: 110px 1fr;
	grid-column-gap: 15px;
	margin-top: 30px;
	border-bottom: 1px solid #6d6d6d;
	padding-bottom: 30px;
	&:hover {
		button {
			background-color: ${(props) => props.theme.primaryColor};
		}
	}
`;
const ProductImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const ProductInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 26px 1fr 30px;
	grid-column-gap: 15px;
	grid-row-gap: 5px;
`;
const Title = styled.h3`
	font-size: 1.2rem;
	span {
		float: right;
		color: ${(props) => props.theme.secondaryColor};
	}
`;
const Description = styled.p`
	font-size: 0.9rem;
`;
const Button = styled.button`
	border: 0px;
	outline: none;
	border-radius: 4px;
	font-size: 1rem;
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.color};
	cursor: pointer;
`;
const EachProduct = ({ product, addToCart }) => {
	return (
		<Product className='each_product'>
			<ProductImage
				src={product.productImage}
				alt={product.description + ' image'}
				className='ProductImage'
			/>
			<ProductInfo>
				<Title>
					{product.title} <span>{`$` + product.price}</span>
				</Title>
				<Description>{product.description}</Description>
				<Button onClick={addToCart}>Add to Order</Button>
			</ProductInfo>
		</Product>
	);
};

export default EachProduct;
