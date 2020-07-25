import React from 'react';
import { func, array } from 'prop-types';
import styled from 'styled-components';
import { ElevatedBox, HeadingLabel } from '../../uiComponents';
import EachProduct from './eachProduct';
import { addToCart } from '../../store/actions';
const ProductsSection = styled.section`
	grid-area: listOfProducts;
`;

const Products = ({ products, dispatch }) => {
	return (
		<ProductsSection>
			<ElevatedBox className='product_elevated'>
				<HeadingLabel className='product_list_heading'>
					List of Products
				</HeadingLabel>
				{products.length ? (
					products.map((product) => {
						return (
							<EachProduct
								key={product.id}
								product={product}
								addToCart={() => dispatch(addToCart(product))}
							/>
						);
					})
				) : (
					<span>No products found</span>
				)}
			</ElevatedBox>
		</ProductsSection>
	);
};
Products.propTypes = {
	products: array.isRequired,
	dispatch: func.isRequired,
};

export default Products;
