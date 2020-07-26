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
	height: calc(100vh - 293px);
	overflow-y: auto;
	padding-bottom: 15px;
`;
const AddNewProductDiv = styled.div`
	position: fixed;
	bottom: 30px;
	margin-right: 30px;
	background: ${(props) => props.theme.elevated};
	border-top: 15px solid ${(props) => props.theme.background};
`;
const emptyProduct = {
	title: '',
	price: 0,
	productImage: '',
	description: '',
	orderQuantity: 0,
};
const Inventory = ({ products, dispatch }) => {
	const updateFunctionHandler = (newValue) => {
		dispatch(updateProduct(newValue));
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
				{products.length
					? products.map((product) => {
							return (
								<InventoryForm
									key={product.id}
									product={product}
									buttonText={'Remove Product'}
									onKeyUpHandler={updateFunctionHandler}
									onButtonClick={deleteProductHandler}
								/>
							);
					  })
					: ''}
				<AddNewProductDiv>
					<InventoryForm
						product={emptyProduct}
						buttonText={'Add Product'}
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
