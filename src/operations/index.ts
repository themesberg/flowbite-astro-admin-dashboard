import { getProducts } from './getProducts.js';
import { getUsers } from './getUsers.js';

export {
	//
	getProducts,
	getUsers,
};

/* Map endpoint to services (GETs only) */
export const operationsEndpoints = {
	products: getProducts,
	users: getUsers,
};
