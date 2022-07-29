import './HamburgerPopup.css';
import '../Navigation/Navagation.css';
import logoutPic from '../../images/Logout.svg';

function HamburgerPopup({
	onSignInClick,
	onLogoutClick,
	onHomeClick,
	onSavedClick,
	isHambuergerMenuOpen,
	isLoggedIn,
	headerType,
}) {
	return (
		<>
			{isHambuergerMenuOpen ? (
				<div className='navbar__hamburger-container'>
					<button
						className='navbar__button navbar__button_visible navbar__button-home navbar__hamburger-home'
						onClick={onHomeClick}
					>
						Home
					</button>
					<button
						className={`navbar__button navbar__button-articles  navbar__hamburger-articles ${
							isLoggedIn ? 'navbar__button_visible' : ''
						} ${
							headerType === 'articles'
								? 'navbar__button_dark navbar__button-articles_dark'
								: ''
						} `}
						onClick={onSavedClick}
					>
						Saved articles
					</button>
					<button
						className='navbar__button navbar__button-auth navbar__hamburger-auth navbar__button_visible'
						onClick={onSignInClick}
					>
						<p
							className={`navbar__button navbar__button-text navbar__button_visible ${
								isLoggedIn ? 'navbar__button-text_logged ' : ''
							}`}
						>
							{isLoggedIn ? 'elise' : 'Sign in'}
						</p>
						<img
							className={`navbar__button-img ${
								isLoggedIn ? 'navbar__button-img_visible' : ''
							}`}
							src={logoutPic}
							onClick={onLogoutClick}
							alt={'logout button'}
						/>
					</button>
				</div>
			) : (
				''
			)}
		</>
	);
}

export default HamburgerPopup;
