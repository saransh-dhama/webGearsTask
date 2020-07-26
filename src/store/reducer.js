import InitialState from './initialStateObject';
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
		case 'UPDATE_PRODUCT':
			return {
				...state,
				products: (function (value = action.newValue) {
					const allProducts = state.products;
					const index = allProducts.findIndex(
						(productInState) => productInState.id === value.id
					);
					allProducts[index] = { ...value };
					return [...allProducts];
				})(),
			};
		case 'ADD_NEW_PRODUCT':
			return {
				...state,
				products: (function (value = action.newValue) {
					const allProducts = state.products;
					const idForNewItem = allProducts.length;
					value.id = idForNewItem;
					return [...allProducts, value];
				})(),
			};
		case 'DELETE_PRODUCT':
			return {
				...state,
				products: (function (id = action.id) {
					const allProducts = state.products;
					const index = allProducts.findIndex(
						(productInState) => productInState.id === id
					);
					allProducts.splice(index, 1);
					return [...allProducts];
				})(),
			};
		default:
			return state;
	}
};

export default reducer;
