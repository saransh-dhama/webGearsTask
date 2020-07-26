import React, { useState, useEffect } from 'react';
import { shape, string, number, func } from 'prop-types';
import styled from 'styled-components';
const Product = styled.div`
	display: grid;
	grid-template-columns: 110px 1fr;
	grid-column-gap: 15px;
	border-bottom: 1px solid ${(props) => props.theme.background};
	padding: 15px 15px 30px 15px;
	&:hover {
		button {
			background-color: ${(props) => props.theme.primaryColor};
		}
	}
	.errorLoadingImage {
		width: 70px;
		justify-self: center;
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
		color: ${(props) => props.theme.primaryColor};
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
	const ImageNotAvailable = () => {
		setImageSrc(require('../../assets/product.svg'));
		setclassName('errorLoadingImage');
	};
	const [imageSrc, setImageSrc] = useState(product.productImage);
	const [imageclassName, setclassName] = useState('ProductImage');
	useEffect(() => {
		setImageSrc(product.productImage);
	}, [product.productImage]);
	return (
		<Product className='each_product'>
			<ProductImage
				src={imageSrc}
				alt={product.description + ' image'}
				className={imageclassName}
				onError={ImageNotAvailable}
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

EachProduct.propTypes = {
	product: shape({
		title: string.isRequired,
		price: number.isRequired,
		productImage: string.isRequired,
		description: string.isRequired,
	}).isRequired,
	addToCart: func.isRequired,
};
export default EachProduct;
