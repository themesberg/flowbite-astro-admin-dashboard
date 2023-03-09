import type { APIRoute } from 'astro';
import { operationsEndpoints } from '../../operations/index.js';

export const get: APIRoute = ({ params /* , request */ }) => {
	console.log('Hit!', params.type);

	const operationName = params.type;

	if (!operationName || !(operationName in operationsEndpoints))
		return new Response('404', { status: 404 });

	const body =
		operationsEndpoints[operationName as keyof typeof operationsEndpoints]();

	return new Response(JSON.stringify(body), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export function getStaticPaths() {
	return Object.keys(operationsEndpoints).map((endpoint) => ({
		params: { type: endpoint },
	}));
}
