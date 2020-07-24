import React, { useContext } from 'react';
import Home from '../../pages/home';
import { store } from '../../store';
const Layout = () => {
	const { state: globalState, dispatch } = useContext(store);
	return (
		<>
			<Home globalState={globalState} dispatch={dispatch} />
			{/* Or add Routes for multiple Pages*/}
		</>
	);
};

export default Layout;
