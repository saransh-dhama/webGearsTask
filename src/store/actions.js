export const addToCart = (product) => ({
	type: 'ADD_ITEM_TO_CART',
	product: product,
});
export const reduceItemQunatityInCart = (product) => ({
	type: 'REDUCE_ITEM_QUANTITY',
	product: product,
});
export const removeFromCart = (product) => ({
	type: 'REMOVE_ITEM_TO_CART',
	product: product,
});
export const updateProduct = (newValue) => ({
	type: 'UPDATE_PRODUCT',
	newValue: newValue,
});
export const addNewProduct = (newValue) => ({
	type: 'ADD_NEW_PRODUCT',
	newValue: newValue,
});
export const deleteProduct = (id) => ({
	type: 'DELETE_PRODUCT',
	id: id,
});
