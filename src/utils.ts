import { API_URL } from './consts.js';

/* Used browser side */
export async function fetchApi(endpoint: string) {
	const url = `${API_URL}${endpoint}`;

	console.log(`Fetching ${url}`);
	return fetch(url).then((r) => r.json());
}
