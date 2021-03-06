import React from 'react';
import { func, array } from 'prop-types';
import {
	updateProduct,
	addNewProduct,
	deleteProduct,
} from '../../store/actions';
import { ElevatedBox, HeadingLabel } from '../../uiComponents';
import styled from 'styled-components';
import InventoryForm from './inventoryForm';
const InventorySection = styled.section`
	grid-area: inventory;
	height: calc(100vh - 320px);
	overflow-y: auto;
	padding-bottom: 15px;
`;
const AddNewProductDiv = styled.div`
	position: fixed;
	bottom: 30px;
	margin-right: 30px;
	background: ${(props) => props.theme.background};
	border: 2px solid ${(props) => props.theme.elevated};
	margin-left: -5px;
`;
const EmptyProductList = styled.p`
	text-align: center;
	font-size: 1.3rem;
	margin-top: 15px;
	opacity: 0.2;
	padding-bottom: 15px;
`;
const emptyProductData = {
	title: '',
	price: '',
	productImage: '',
	description: '',
	orderQuantity: 0,
};
const Inventory = ({ products, dispatch }) => {
	const updateFunctionHandler = (newValue) => {
		if (newValue.price && newValue.title) dispatch(updateProduct(newValue));
	};
	const addNewProductHandler = (newValue) => {
		dispatch(addNewProduct(newValue));
	};
	const deleteProductHandler = (newValue) => {
		dispatch(deleteProduct(newValue.id));
	};
	return (
		<InventorySection>
			<ElevatedBox className='inventory_elevated'>
				<HeadingLabel className='inventory_heading'>Inventory</HeadingLabel>
				{products.length ? (
					products.map((product) => {
						return (
							<InventoryForm
								key={product.id}
								product={product}
								buttonText={'Remove ' + product.title}
								onKeyUpHandler={updateFunctionHandler}
								onButtonClick={deleteProductHandler}
							/>
						);
					})
				) : (
					<EmptyProductList>No products found</EmptyProductList>
				)}
				<AddNewProductDiv>
					<InventoryForm
						product={emptyProductData}
						buttonText={'Add New Product'}
						onKeyUpHandler={updateFunctionHandler}
						onButtonClick={addNewProductHandler}
					/>
				</AddNewProductDiv>
			</ElevatedBox>
		</InventorySection>
	);
};
Inventory.propTypes = {
	products: array.isRequired,
	dispatch: func.isRequired,
};

export default Inventory;
