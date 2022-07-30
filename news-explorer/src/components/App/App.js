import {Route, Routes, useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {testData} from '../../utils/data';
import Header from '../Header/Header';
import {CurrentUserContext} from '../../contexts/UserInfoContext';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';
// import Preloader from '../Preloader/Preloader';
import Popup from '../Popup/Popup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import About from '../About/About';

function App() {
	const [currentUser, setCurenUser] = useState({
		username: 'Elise',
		email: 'test@test.com',
		_id: '2',
	});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isPopupSignInOpen, setIsPopupSignInOpen] = useState(false);
	const [isPopupSignUpOpen, setIsPopupSignUpOpen] = useState(false);
	const [isInfoTooltipOpen, setIsInfoTooltip] = useState(false);
	const [isHambuergerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
	const [allCards, setAllCards] = useState(testData);
	const [count, setCount] = useState(6);
	const [savedCardsData, setSaveAllCardsData] = useState(testData);
	const [cardsData, setCardsData] = useState([]);
	const [cardsToSave, setCardsToSave] = useState({});
	const [isCardsHover, setIsCardHover] = useState(false);
	const [isRegistrationSucceeded, setIsRegistrationSucceeded] = useState(false);
	const [isMobile, setIsMobile] = React.useState(false);

	const navigate = useNavigate();

	function handleSignInClick() {
		setIsPopupSignInOpen(true);
		setIsHamburgerMenuOpen(false);
	}
	function handleSignUpClick() {
		setIsPopupSignInOpen(false);
		setIsInfoTooltip(false);
		setIsPopupSignUpOpen(true);
	}

	function handlePopupSwitch() {
		setIsPopupSignInOpen(!isPopupSignInOpen);
		setIsPopupSignUpOpen(!isPopupSignUpOpen);
	}

	function closeAllPopups() {
		setIsPopupSignInOpen(false);
		setIsPopupSignUpOpen(false);
		setIsInfoTooltip(false);
	}
	function handleLogout() {
		setIsLoggedIn(false);
	}

	function handleSavedRoute() {
		if (isHambuergerMenuOpen) {
			setIsHamburgerMenuOpen(false);
		}
		navigate('/saved-news');
	}

	function handleHomeRoute() {
		if (isHambuergerMenuOpen) {
			setIsHamburgerMenuOpen(false);
		}
		navigate('/');
	}

	function handleScreenResize() {
		if (window.innerWidth > 745) {
			setIsMobile(false);
		} else {
			setIsMobile(true);
		}
	}
	React.useEffect(() => {
		window.addEventListener('resize', handleScreenResize);
		return () => {
			window.removeEventListener('resize', handleScreenResize);
		};
	}, []);

	//Check for screen size on mounting
	React.useEffect(() => {
		handleScreenResize();
	}, []);

	function handleDisplayCards() {
		let cardsToRender = [];
		for (let i = 0; i < count; i++) {
			if (testData[i]) {
				cardsToRender.push(testData[i]);
			}
		}
		setCount(count + 3);
		setCardsData(cardsToRender);
	}

	useEffect(() => {
		setAllCards(testData);
		if (cardsData === []) return;
		function renderCards() {
			let cardsToRender = [];
			for (let i = 0; i < 3; i++) {
				if (!testData[i]) return;
				cardsToRender.push(testData[i]);
			}
			setCardsData(cardsToRender);
		}
		renderCards();
	}, []);

	function handleHamburgerClick() {
		setIsHamburgerMenuOpen(!isHambuergerMenuOpen);
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className='App'>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Header
									isLoggedIn={isLoggedIn}
									onSignInClick={handleSignInClick}
									onLogoutClick={handleLogout}
									onSavedClick={handleSavedRoute}
									onHomeClick={handleHomeRoute}
									onHamburgerMenuClick={handleHamburgerClick}
									isMobile={isMobile}
									isHambuergerMenuOpen={isHambuergerMenuOpen}
									user={currentUser}
								/>
								<Main
									isLoggedIn={isLoggedIn}
									savedCardsData={savedCardsData}
									cardsData={cardsData}
									allCards={allCards}
									onClickMore={handleDisplayCards}
									setAllCards={setAllCards}
									setCardsToSave={setCardsToSave}
									cardsToSave={cardsToSave}
								/>
								<About />
							</>
						}
					/>
					<Route
						path='/saved-news'
						element={
							<ProtectedRoute
								element={
									<>
										<SavedNews
											onSavedClick={handleSavedRoute}
											onHomeClick={handleHomeRoute}
											isLoggedIn={isLoggedIn}
											headerType={'articles'}
											onLogoutClick={handleLogout}
											savedCardsData={savedCardsData}
											isCardsHover={isCardsHover}
											setIsCardHover={setIsCardHover}
											setCardsToSave={setCardsToSave}
											cardsToSave={cardsToSave}
											onHamburgerMenuClick={handleHamburgerClick}
											isMobile={isMobile}
											isHambuergerMenuOpen={isHambuergerMenuOpen}
											user={currentUser}
										/>
									</>
								}
								isLoggedIn={isLoggedIn}
							/>
						}
					/>
				</Routes>
				<Footer />

				<Popup
					isSignInOpen={isPopupSignInOpen}
					isSignUpOpen={isPopupSignUpOpen}
					onSignUpClick={handlePopupSwitch}
					onCloseClick={closeAllPopups}
					isInfoTooltipOpen={isInfoTooltipOpen}
				/>
				<InfoTooltip
					onCloseClick={closeAllPopups}
					name={'registration'}
					onSignInClick={handleSignInClick}
					onSignUpClick={handleSignUpClick}
					status={isRegistrationSucceeded}
					isOpen={isInfoTooltipOpen}
				/>
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
