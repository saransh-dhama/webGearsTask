import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ElevatedBox, HeadingLabel } from '../../uiComponents';
import EachProduct from './eachProduct';
const ProductsSection = styled.section`
	grid-area: listOfProducts;
`;

const Products = () => {
	return (
		<ProductsSection>
			<ElevatedBox className='product_elevated'>
				<HeadingLabel className='product_list_heading'>
					List of Products
				</HeadingLabel>
				<EachProduct />
				<EachProduct />
				<EachProduct />
			</ElevatedBox>
		</ProductsSection>
	);
};

export default Products;
