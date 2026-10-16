import { username } from '../constants.js';

const getExternalData = async (url) => {
	const response = await fetch(`https://${url}`);
	if (!response.ok) throw new Error(`Failed to fetch my GitHub profile (${response.status})`);
	return await response.json();
};

export const getProfile = async (endpoint) => {
	const resolvedEndpoint = endpoint == null ? '' : `/${endpoint}`;
	return await getExternalData(`api.github.com/users/${username}${resolvedEndpoint}`);
};

export const getProjects = async () =>
	await getExternalData(`pinned.berrysauce.dev/get/${username}`);
