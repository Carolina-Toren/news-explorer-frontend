import './SavedNewsHeader.css';

function SavedNewsHeader({isLoggedIn, user}) {
	console.log(user);
	return (
		<section className='saved__header-container'>
			<p className='saved__header'>Saved articles</p>
			<h2 className='saved__sub-header'>{`${user.username}, you have 5 saved articles`}</h2>
			<p className='saved__keywords'>
				By keywords: <b>Nature,Nature, Yellowstone, and 2 other</b>
			</p>
		</section>
	);
}

export default SavedNewsHeader;
