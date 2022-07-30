const customFetch = (url, headers) =>
	fetch(url, headers).then((res) =>
		res.ok ? res.json() : Promise.reject(res.statusText)
	);

export class Api {
	constructor({baseUrl, headers}) {
		this._baseUrl = baseUrl;

		this._headers = headers;
	}

	customFetch(url, headers) {
		return fetch(url, headers).then((res) =>
			res.ok ? res.json() : Promise.reject(res.statusText)
		);
	}

	getSavedCards() {
		return customFetch(`${this._baseUrl}/cards`, {headers: this._headers});
	}

	getUserInfo() {
		return customFetch(`${this._baseUrl}/users/me`, {headers: this._headers});
	}

	getUserImg() {
		return customFetch(`${this._baseUrl}/users/me/avatar`, {
			headers: this._headers,
		});
	}

	deleteCard(cardId) {
		return customFetch(`${this._baseUrl}/cards/${cardId} `, {
			headers: this._headers,
			method: 'DELETE',
		});
	}

	_MarkCard(cardId) {
		return customFetch(`${this._baseUrl}/cards/${cardId}/likes `, {
			headers: this._headers,
			method: 'PUT',
		});
	}

	_unmarkCard(cardId) {
		return customFetch(`${this._baseUrl}/cards/${cardId}/likes `, {
			headers: this._headers,
			method: 'DELETE',
		});
	}

	changeMarkCardStatus(cardID, isLiked) {
		if (isLiked) {
			return this._MarkCard(cardID);
		} else {
			return this._unmarkCard(cardID);
		}
	}

	// editPrifileInfo(data) {
	// 	return customFetch(`${this._baseUrl}/users/me `, {
	// 		headers: this._headers,
	// 		method: 'PATCH',
	// 		body: JSON.stringify(data),
	// 	});
	// }

	// editPrifileImg(data) {
	// 	return customFetch(`${this._baseUrl}/users/me/avatar`, {
	// 		headers: this._headers,

	// 		method: 'PATCH',

	// 		body: JSON.stringify(data),
	// 	});
	// }

	// createCard({name, link}) {
	// 	const data = {name, link};

	// 	return customFetch(`${this._baseUrl}/cards`, {
	// 		headers: this._headers,

	// 		method: 'POST',

	// 		body: JSON.stringify(data),
	// 	});
	// }

	updateToken(token) {
		this._headers.Authorization = `Bearer ${token}`;
	}
}

const api = new Api({
	// baseUrl: 'api.new-explorer.students.nomoredomainssbs.ru',
	baseUrl: 'http://localhost:3000',

	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('jwt')}`,
	},
});

export default api;
