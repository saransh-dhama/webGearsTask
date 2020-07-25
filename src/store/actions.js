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
