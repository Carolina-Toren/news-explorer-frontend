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
	user,
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
							headerType === 'articles' && !isHambuergerMenuOpen
								? 'navbar__button_dark navbar__button-articles_dark'
								: ''
						} `}
						onClick={onSavedClick}
					>
						Saved articles
					</button>
					<button
						className='navbar__button navbar__button-auth navbar__hamburger-auth navbar__button_visible'
						onClick={!isLoggedIn ? onSignInClick : onLogoutClick}
					>
						<p
							className={`navbar__button navbar__button-text navbar__button_visible ${
								isLoggedIn ? 'navbar__button-text_logged ' : ''
							}`}
						>
							{isLoggedIn ? user.name : 'Sign in'}
						</p>
						<img
							className={`navbar__button-img ${
								isLoggedIn ? 'navbar__button-img_visible' : ''
							}`}
							src={logoutPic}
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
