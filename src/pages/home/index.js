import React, { useEffect } from 'react';
import { ProductPageSection } from './elementStyles';
const AProductPage = ({ globalState, dispatch }) => {
	console.log(globalState);
	useEffect(() => {
		dispatch({
			type: 'TEST',
			data: 'this is a test',
		});
	}, []);
	return <ProductPageSection>hello</ProductPageSection>;
};

export default AProductPage;
