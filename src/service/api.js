import axios from 'axios';

export const getAllThreads = () => {
	const url = 'http://localhost:1338/threads';

	return axios.get(url, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getThread = (slug) => {
	const url = `http://localhost:1338/threads/${slug}`;

	return axios.get(url, {
		headers: {
			Accept: 'application/json',
		},
	});
};
