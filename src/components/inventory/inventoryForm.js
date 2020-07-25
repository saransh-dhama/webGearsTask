import React, { useState } from 'react';
import { Input, TextArea } from '../../uiComponents';
import styled from 'styled-components';

const InventoryFormDiv = styled.div`
	padding: 15px;
	border-bottom: 1px solid ${(props) => props.theme.background};
	&:hover {
		button {
			background-color: ${(props) => props.theme.primaryColor};
		}
	}
`;
const Button = styled.button`
	border: 0px;
	outline: none;
	border-radius: 4px;
	font-size: 1rem;
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.color};
	cursor: pointer;
	width: 100%;
	height: 40px;
`;
const InventoryForm = ({ product, buttonText }) => {
	const [title, setTitle] = useState(product.title);
	const [price, setPrice] = useState(product.price);
	const [productImage, setProductImage] = useState(product.productImage);
	const [description, setDescription] = useState(product.description);
	return (
		<InventoryFormDiv>
			<form>
				<Input
					type='text'
					name='title'
					id='titleid'
					placeholder='Product Title'
					value={title}
					field='title'
					handleChange={setTitle}
					inputWidth={60}
				/>
				<Input
					type='number'
					name='price'
					id='priceid'
					placeholder='Price'
					value={`${price}`}
					field='price'
					handleChange={setPrice}
					inputWidth={30}
				/>
				<Input
					type='text'
					name='productImage'
					id='priceid'
					placeholder='Image URL'
					value={productImage}
					handleChange={setProductImage}
					inputWidth={100}
				/>
				<TextArea
					name='description'
					id='descriptionid'
					placeholder='Product Description'
					value={description}
					handleChange={setDescription}
					inputWidth={100}
				/>
				<Button>{buttonText}</Button>
			</form>
		</InventoryFormDiv>
	);
};

export default InventoryForm;
