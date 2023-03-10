import type { APIRoute } from 'astro';
import { getProducts, getUsers } from '../../operations/index.js';

/* Map REST API endpoints to internal operations (GETs only) */
export const endpointsToOperations = {
	products: getProducts,
	users: getUsers,
};

function parseTypeParam(endpoint: string | undefined) {
	if (!endpoint || !(endpoint in endpointsToOperations)) return undefined;
	return endpoint as keyof typeof endpointsToOperations;
}

export const get: APIRoute = ({ params /* , request */ }) => {
	console.log('Hit!', params.type);

	const operationName = parseTypeParam(params.type);

	if (!operationName) return new Response('404', { status: 404 });

	const body = endpointsToOperations[operationName]();

	return new Response(JSON.stringify(body), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

/* Astro's static build helper, can be removed for SSR mode */
export function getStaticPaths() {
	return Object.keys(endpointsToOperations).map((endpoint) => ({
		params: { type: endpoint },
	}));
}
