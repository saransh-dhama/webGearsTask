import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import InitialState from './initialStateObject';
const store = createContext(InitialState);
const { Provider } = store;

const reducer = (state = InitialState, action) => {
	switch (action.type) {
		case 'ADD_ITEM_TO_CART':
			return {
				...state,
				products: (function (product = action.product) {
					const allProducts = state.products;
					const index = allProducts.findIndex(
						(productInState) => productInState.id === product.id
					);
					allProducts[index].orderQuantity = product.orderQuantity + 1;
					return [...allProducts];
				})(),
			};
		case 'REDUCE_ITEM_QUANTITY':
			return {
				...state,
				products: (function (product = action.product) {
					const allProducts = state.products;
					const index = allProducts.findIndex(
						(productInState) => productInState.id === product.id
					);
					const newQunatity = product.orderQuantity - 1;
					allProducts[index].orderQuantity = newQunatity < 0 ? 0 : newQunatity;
					return [...allProducts];
				})(),
			};
		case 'REMOVE_ITEM_TO_CART':
			return {
				...state,
				products: (function (product = action.product) {
					const allProducts = state.products;
					const index = allProducts.findIndex(
						(productInState) => productInState.id === product.id
					);
					allProducts[index].orderQuantity = 0;
					return [...allProducts];
				})(),
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
