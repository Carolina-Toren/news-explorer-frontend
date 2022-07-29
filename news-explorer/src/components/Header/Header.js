import './Header.css';
import SearchForm from '../SearchForm/SearchForm';
import Navagation from '../Navigation/Nagation';

function Header({
	isLoggedIn,
	onSignInClick,
	onLogoutClick,
	onSavedClick,
	onHomeClick,
	onHamburgerMenuClick,
	isHambuergerMenuOpen,
	isMobile,
}) {
	return (
		<header className='header'>
			<Navagation
				isLoggedIn={isLoggedIn}
				onSignInClick={onSignInClick}
				onLogoutClick={onLogoutClick}
				onSavedClick={onSavedClick}
				onHomeClick={onHomeClick}
				popupTpe={'signin'}
				onHamburgerMenuClick={onHamburgerMenuClick}
				isHambuergerMenuOpen={isHambuergerMenuOpen}
				isMobile={isMobile}
			/>
			<h1 className='header__header'>What's going on in the world?</h1>
			<div className='header__text'>
				Find the latest news on any topic and save them in your personal account.
			</div>
			<SearchForm />
		</header>
	);
}

export default Header;
