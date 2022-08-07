import './SearchForm.css';
import React, {useState} from 'react';

function SearchForm({onSearchSubmit, searchInputValue}) {
	const [keyword, setKeyword] = useState('');
	function handleInputChange(e) {
		// eslint-disable-next-line no-useless-escape
		const filteredValue = e.target.value.replace(/[*|\"<>[\]{}`;&$]+/, ' ');
		setKeyword(filteredValue);
		localStorage.setItem('keyword', filteredValue);
	}
	function handleSubmit(e) {
		e.preventDefault();
		onSearchSubmit(keyword);
	}
	return (
		<form className='search' onSubmit={handleSubmit}>
			<input
				className='search__input'
				type='search'
				placeholder='Enter topic'
				required
				onChange={handleInputChange}
			/>

			<button className='search__btn' type='submit'>
				Search
			</button>
		</form>
	);
}

export default SearchForm;
