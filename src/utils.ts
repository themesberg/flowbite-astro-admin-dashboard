import { API_URL, STATIC_BASE_URL } from './consts.js';
import type { Endpoint, EndpointsToOperations } from './types.js';

export async function fetchData<Selected extends Endpoint>(endpoint: Selected) {
	const apiEndpoint = `${API_URL}${endpoint}`;

	console.log(`Fetching ${apiEndpoint}`);
	return fetch(apiEndpoint).then((r) => r.json()) as unknown as Promise<
		ReturnType<EndpointsToOperations[Selected]>
	>;
}

export function url(path = '') {
	return `${import.meta.env.SITE}${import.meta.env.BASE_URL}${path}`;
}

// TODO: Remove old assets from git history (to keep it snappy for Containers).
export function asset(path: string) {
	return `${STATIC_BASE_URL}/${path}`;
}
