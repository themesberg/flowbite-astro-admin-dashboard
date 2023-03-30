import type { PlaygroundAction } from '../../types/entities.js';

export const playgroundActions = ['refetchCrudData', 'hardReloadPage'] as const;

export const actions: { text: string; action: PlaygroundAction }[] = [
	{ text: 'Soft re-fetch (API)', action: 'refetchCrudData' },
	{ text: 'Hard reload (SSR)', action: 'hardReloadPage' },
];
