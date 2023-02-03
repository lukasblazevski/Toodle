import axios from 'axios';

const api = axios.create({
	baseURL: '/api',
	timeout: 10000,
	validateStatus: status => status < 400
});

api.interceptors.request.use(
	value => {
		if (value.data !== undefined) {
			if (!value.headers) {
				value.headers = {};
			}

			value.headers['Content-Type'] = 'application/json';
		}

		return value;
	}
);

api.interceptors.response.use(undefined, error => {
	alert(`Error: ${error.response?.data || error.message}`);

	return Promise.reject(error);
});

export default api;