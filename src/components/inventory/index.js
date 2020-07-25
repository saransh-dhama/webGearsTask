import React from 'react';
import { func, array } from 'prop-types';

import { ElevatedBox, HeadingLabel } from '../../uiComponents';
import styled from 'styled-components';
import InventoryForm from './inventoryForm';
const InventorySection = styled.section`
	grid-area: inventory;
`;
const emptyProduct = {
	title: '',
	price: '',
	productImage: '',
	description: '',
	inCart: 0,
};
const Inventory = ({ products, dispatch }) => {
	return (
		<InventorySection>
			<ElevatedBox className='inventory_elevated'>
				<HeadingLabel className='inventory_heading'>Inventory</HeadingLabel>
				<InventoryForm product={emptyProduct} buttonText={'Add Product'} />
				{products.length &&
					products.map((product) => {
						return (
							<InventoryForm
								key={product.id}
								product={product}
								buttonText={'Remove Product'}
							/>
						);
					})}
			</ElevatedBox>
		</InventorySection>
	);
};
Inventory.propTypes = {
	products: array.isRequired,
	dispatch: func.isRequired,
};

export default Inventory;
