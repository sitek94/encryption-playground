import { generateKeyPair } from '$lib';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const userKeyPair = await generateKeyPair();
	const leaderKeyPair = await generateKeyPair();

	return {
		userKeyPair,
		leaderKeyPair
	};
};
