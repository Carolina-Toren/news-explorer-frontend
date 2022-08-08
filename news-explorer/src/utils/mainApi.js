export class MainApi {
	constructor({baseUrl, headers}) {
		this._baseUrl = baseUrl;
		this._headers = headers;
		this._customFetch = this.customFetch.bind(this);
	}

	customFetch(url, headers) {
		return fetch(url, headers).then((res) =>
			res.ok ? res.json() : Promise.reject(res.statusText)
		);
	}

	getSavedArticles() {
		return this._customFetch(`${this._baseUrl}/articles`, {
			headers: this._headers,
		});
	}

	getUserInfo() {
		return this._customFetch(`${this._baseUrl}/users/me`, {
			headers: this._headers,
		});
	}

	unmarkCard(id) {
		return this._customFetch(`${this._baseUrl}/articles/${id} `, {
			headers: this._headers,
			method: 'DELETE',
		});
	}

	markCard(card, keyword) {
		return this._customFetch(`${this._baseUrl}/articles `, {
			headers: this._headers,
			method: 'POST',
			body: JSON.stringify({
				keyword: keyword,
				title: card.cardTitle,
				text: card.cardSubtitle,
				date: card.cardDate,
				source: card.cardCaption,
				link: card.cardLink,
				image: card.imgSrc,
			}),
		});
	}
}

const mainApi = new MainApi({
	baseUrl: 'https://api.new-explorer.students.nomoredomainssbs.ru',
	// baseUrl: 'http://localhost:3000',

	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('jwt')}`,
	},
});

export default mainApi;
