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
				<InventoryForm
					product={emptyProduct}
					buttonText={'Add Product'}
					onKeyUpHandler={updateFunctionHandler}
					onButtonClick={addNewProductHandler}
				/>
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
			</ElevatedBox>
		</InventorySection>
	);
};
Inventory.propTypes = {
	products: array.isRequired,
	dispatch: func.isRequired,
};

export default Inventory;
