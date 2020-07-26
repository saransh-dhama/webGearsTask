import React, { useState } from 'react';
import { Input, TextArea } from '../../uiComponents';
import styled from 'styled-components';

const InventoryFormDiv = styled.div`
	padding: 15px;
	border-bottom: 5px solid ${(props) => props.theme.background};
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
const InventoryForm = ({
	product,
	buttonText,
	onKeyUpHandler,
	onButtonClick,
}) => {
	const [title, setTitle] = useState(product.title);
	const [price, setPrice] = useState(product.price);
	const [productImage, setProductImage] = useState(product.productImage);
	const [description, setDescription] = useState(product.description);
	const newValue = {
		id: product.id,
		title: title,
		price: parseInt(price),
		productImage: productImage,
		description: description,
		orderQuantity: product.orderQuantity,
	};
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
					onKeyUpHandler={() => onKeyUpHandler(newValue)}
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
					onKeyUpHandler={() => onKeyUpHandler(newValue)}
					inputWidth={30}
				/>
				<Input
					type='text'
					name='productImage'
					id='priceid'
					placeholder='Image URL'
					value={productImage}
					handleChange={setProductImage}
					onKeyUpHandler={() => onKeyUpHandler(newValue)}
					inputWidth={100}
				/>
				<TextArea
					name='description'
					id='descriptionid'
					placeholder='Product Description'
					value={description}
					handleChange={setDescription}
					onKeyUpHandler={() => onKeyUpHandler(newValue)}
					inputWidth={100}
				/>
				<Button type='button' onClick={() => onButtonClick(newValue)}>
					{buttonText}
				</Button>
			</form>
		</InventoryFormDiv>
	);
};

export default InventoryForm;
