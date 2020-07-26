import React, { useContext } from 'react';
import Home from '../../pages/home';
import { store } from '../../store';
const Layout = () => {
	const [state, dispatch] = useContext(store);
	return (
		<>
			<Home products={state.products} dispatch={dispatch} />
			{/* Or add Routes for multiple Pages*/}
		</>
	);
};

export default Layout;
