import './Navagation.css';
import logoutPic from '../../images/Logout.svg';
import logoutPicDark from '../../images/LogoutDark.svg';
import HamburgerPopup from '../HamburgerPopup/HamburgerPopup';

function Navagation({
	isLoggedIn,
	headerType,
	onSignInClick,
	onLogoutClick,
	onSavedClick,
	onHomeClick,
	onHamburgerMenuClick,
	isHambuergerMenuOpen,
	isMobile,
}) {
	return (
		<nav
			className={`navbar__container ${
				headerType === 'articles' ? 'navbar__container_dark' : ''
			} `}
		>
			{!isMobile ? (
				<h2
					className={`navbar__header ${
						headerType === 'articles' ? 'navbar__header_dark' : ''
					}`}
				>
					NewsExplorer
				</h2>
			) : (
				''
			)}

			<ul
				className={` ${isMobile ? 'navbar__list-hamburger' : 'navbar__list'} ${
					isHambuergerMenuOpen && isMobile ? 'navbar__list-hamburger_active' : ''
				}`}
			>
				{isMobile ? (
					<>
						<h2
							className={`navbar__header navbar__header-humburger ${
								headerType === 'articles' && !isHambuergerMenuOpen
									? 'navbar__header_dark'
									: ''
							}`}
						>
							NewsExplorer
						</h2>
						<button
							className={`navbar__hamburger ${
								headerType === 'articles' ? 'navbar__hamburger_dark' : ''
							} ${isHambuergerMenuOpen ? 'navbar__hamburger-close' : ''}`}
							onClick={onHamburgerMenuClick}
						/>
						<HamburgerPopup
							isLoggedIn={isLoggedIn}
							onSignInClick={onSignInClick}
							onHomeClick={onHomeClick}
							onLogoutClick={onLogoutClick}
							onSavedClick={onSavedClick}
							isHambuergerMenuOpen={isHambuergerMenuOpen}
							headerType={headerType}
						/>
					</>
				) : (
					<>
						<li className={`navnar__list-item ${isMobile ? '' : ''}`}>
							<button
								className={`navbar__button navbar__button-home ${
									headerType === 'articles'
										? 'navbar__button_dark navbar__button-home_dark'
										: ''
								} ${!isMobile ? 'navbar__button_visible' : ''}`}
								onClick={onHomeClick}
							>
								Home
							</button>
						</li>

						<li className='navnar__list-item'>
							<button
								className={`navbar__button navbar__button-articles ${
									headerType === 'articles'
										? 'navbar__button_dark navbar__button-articles_dark'
										: ''
								} ${isLoggedIn ? '' : 'navbar__button_hidden'} ${
									!isMobile ? 'navbar__button_visible' : ''
								}`}
								onClick={onSavedClick}
							>
								Saved articles
							</button>
						</li>
						<li className='navnar__list-item'>
							<button
								className={`navbar__button navbar__button-auth ${
									headerType === 'articles' ? 'navbar__button-auth_dark' : ''
								} ${!isMobile ? 'navbar__button_visible' : ''}`}
							>
								<p
									className={`navbar__button navbar__button-text ${
										isLoggedIn === true ? 'navbar__button-text_logged' : ''
									} ${headerType === 'articles' ? 'navbar__button-text_dark' : ''} ${
										!isMobile ? 'navbar__button_visible' : ''
									}`}
									onClick={onSignInClick}
								>
									{isLoggedIn ? 'elise' : 'Sign in'}
								</p>
								<img
									className={`navbar__button-img ${
										isLoggedIn ? 'navbar__button-img_visible' : ''
									}`}
									src={headerType === 'articles' ? logoutPicDark : logoutPic}
									onClick={onLogoutClick}
									alt={'logout button'}
								/>
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}

export default Navagation;
