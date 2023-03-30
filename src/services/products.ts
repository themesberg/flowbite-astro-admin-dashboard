/* eslint-disable no-param-reassign */
import { faker } from '@faker-js/faker';
import { RANDOMIZE } from '../app/constants.js';
import type { Products } from '../types/entities.js';

import productsStaticJSON from '../../data/products.json' assert { type: 'json' };

const productsStaticData: Products = productsStaticJSON;

export function getProducts(randomize = RANDOMIZE) {
	console.log('getProducts');

	const result = randomize
		? productsStaticData.map((p) => {
				p.price = faker.commerce.price();
				p.technology = faker.commerce.productName();
				p.description = faker.commerce.productDescription();
				return p;
		  })
		: productsStaticData;

	return result;
}
