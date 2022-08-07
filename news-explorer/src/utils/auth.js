import mainApi from './mainApi';

export const BASE_URL = 'https://api.new-explorer.students.nomoredomainssbs.ru';

export function register(email, username, password) {
	return mainApi
		.customFetch(`${BASE_URL}/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
				name: username,
			}),
		})

		.then((data) => {
			if (data) {
				return data;
			} else {
				throw new Error('User with this email address already exists');
			}
		});
}

export function authorize(email, password) {
	return mainApi
		.customFetch(`${BASE_URL}/signin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({email, password}),
		})
		.then((data) => {
			if (data.token) {
				localStorage.setItem('jwt', data.token);
				return data.token;
			} else {
				throw new Error('the user with the specified email not found');
			}
		})
		.catch((err) => {
			console.log(err);
		});
}
