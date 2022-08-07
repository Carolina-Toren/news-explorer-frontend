const API_KEY = '888b164103974dfc9d9c32570ec7b11a';

// const BASE_URL = 'https://newsapi.org/v2/everything';

const BASE_URL = 'https://nomoreparties.co/news/v2/everything';

class NewsApi {
	constructor(baseUrl, headers, from, to) {
		this._baseUrl = baseUrl;
		this._headers = headers;
		this._from = from;
		this._to = to;
		this.customFetch = this.customFetch.bind(this);
	}

	customFetch(url, headers) {
		return fetch(url, headers).then((res) => {
			if (res.ok) {
				return res.json();
			}
			Promise.reject(`ERROR: ${res.statusText}`);
		});
	}

	getArticles(keyword) {
		return this.customFetch(
			`${this._baseUrl}?q=${keyword}&from=${this._from}&to=${this._to}&pageSize=100&apikey=${API_KEY}`
		);
	}
}

//calculate a week ago
const date = new Date();
const toDate = date.toISOString();
date.setDate(date.getDate() - 7);
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();

const fromDate = day + '/' + month + '/' + year;

export default new NewsApi(BASE_URL, {}, fromDate, toDate);
