import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const InitialState = {
	testData: null,
};
const store = createContext(InitialState);
const { Provider } = store;

const reducer = (state = InitialState, action) => {
	switch (action.type) {
		case 'TEST':
			return {
				...state,
				testData: action.data,
			};
		default:
			return state;
	}
};

const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, InitialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
	children: PropTypes.any,
};

export { store, StateProvider };
