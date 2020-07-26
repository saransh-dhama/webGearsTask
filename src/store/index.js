import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import InitialState from './initialStateObject';
import Reducer from './reducer';

const store = createContext(InitialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, InitialState);

	return <Provider value={[state, dispatch]}>{children}</Provider>;
};

StateProvider.propTypes = {
	children: PropTypes.any,
};

export { store, StateProvider };
