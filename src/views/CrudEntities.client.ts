/* eslint-disable no-param-reassign */

import type { Endpoint } from '../types/entities.js';
import { fetchData } from '../lib/data.js';
import { endpointsToOperations } from '../pages/api/[...entity].js';

export class CrudEntities extends HTMLElement {
	#body = this.querySelector('tbody')!;

	#rows = this.#body.querySelectorAll('tr')!;

	#refreshButton = this.querySelector('[data-refresh]');

	type: Endpoint | undefined;

	constructor() {
		super();
		const type = this.getAttribute('type');

		if (
			Object.keys(endpointsToOperations).find((endpoint) => endpoint === type)
		)
			this.type = type as Endpoint;
		else throw Error('Wrong CRUD type!');

		this.#refreshButton?.addEventListener('click', () => {
			this.update().catch(() => undefined);
		});
	}

	/**
	 * Fetch new content from API and update DOM text accordingly
	 */
	async update() {
		if (!this.type) return;

		const newData = await fetchData(this.type);
		console.log('UP');

		this.#rows.forEach((row, index) =>
			row.querySelectorAll('data').forEach((binding) => {
				const valKey = binding.value;
				const rowData = newData[index];
				if (!rowData) return;
				if (!(valKey in rowData)) return;

				binding.innerText = rowData[valKey as keyof typeof rowData].toString();
			}),
		);

		console.log('New data received!', newData);
	}
}

export const tagName = 'entities-crud';
declare global {
	interface HTMLElementTagNameMap {
		[tagName]: CrudEntities;
	}
}
customElements.define(tagName, CrudEntities);
