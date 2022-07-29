import './SearchForm.css';

function SearchForm() {
	return (
		<form className='search'>
			<input
				className='search__input'
				type='search'
				placeholder='Enter topic'
				required
			/>
			<button className='search__btn' type='submit'>
				Search
			</button>
		</form>
	);
}

export default SearchForm;
