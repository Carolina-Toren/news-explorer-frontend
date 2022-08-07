import {Route, Routes, useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';
import Header from '../Header/Header';
import {CurrentUserContext} from '../../contexts/UserInfoContext';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';
import Popup from '../Popup/Popup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import NewsApi from '../../utils/newsApi';
import mainApi from '../../utils/mainApi';
import * as auth from '../../utils/auth';

function App() {
	const [username, setUsername] = useState('');
	const [userEmail, setUserEmaill] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [userId, setUserId] = useState('');
	const [currentUser, setCurenUser] = useState({name: '', _id: ''});
	const [token, setToken] = useState(localStorage.getItem('jwt'));
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isPopupSignInOpen, setIsPopupSignInOpen] = useState(false);
	const [isPopupSignUpOpen, setIsPopupSignUpOpen] = useState(false);
	const [isInfoTooltipOpen, setIsInfoTooltip] = useState(false);
	const [isHambuergerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
	const [allCards, setAllCards] = useState([]);
	const [count, setCount] = useState(2);
	const [savedCardsData, setSaveCardsData] = useState([]);
	const [cardsData, setCardsData] = useState([]);
	const [cardsToSave, setCardsToSave] = useState({});
	const [isCardsHover, setIsCardHover] = useState(false);
	const [isRegistrationSucceeded, setIsRegistrationSucceeded] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isNewsSerachOpen, SetIsNewsSearchOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	// const [isPopupWithFormOpen, setIsPopupWithFormOpen] = useState(false);
	const [cardKeyWord, setCardKeyword] = useState(
		localStorage.getItem('lastKeyWord') || ''
	);

	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			mainApi
				.getUserInfo()
				.then((res) => {
					if (res) {
						console.log(res.name, res._id);
						setCurenUser({name: res.name, _id: res._id});
						setIsLoggedIn(true);
					}
				})
				.catch(console.log);
		}
	}, [token]);

	function handleSignInClick() {
		setIsPopupSignInOpen(true);
		setIsInfoTooltip(false);
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
		if (isHambuergerMenuOpen) {
			setIsHamburgerMenuOpen(false);
		}
		localStorage.removeItem('jwt');
		setIsLoggedIn(false);
		setToken('');
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

	//recent search resault
	React.useEffect(() => {
		if (!allCards) {
			setCardsData([]);
			return;
		}
		let cardsToRender = [];
		let card;

		for (let i = 0; i <= count; i++) {
			if (allCards[i]) {
				card = {...allCards[i], id: uuid()};
				cardsToRender.push(card);
			}
		}
		setCardsData(cardsToRender);
	}, [allCards, count]);

	function handleDisplayCards() {
		setCount(count + 3);
	}

	function handleSearchSubmit(keyword) {
		SetIsNewsSearchOpen(true);
		setIsLoading(true);
		setCardKeyword(keyword);
		NewsApi.getArticles(keyword)
			.then((res) => {
				if (res.articles.length !== 0) {
					setAllCards(res.articles);

					localStorage.setItem('cards', JSON.stringify(res.articles));
				} else {
					localStorage.removeItem('cards');
				}
				setIsLoading(false);
				SetIsNewsSearchOpen(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleHamburgerClick() {
		setIsHamburgerMenuOpen(!isHambuergerMenuOpen);
	}
	///get saved articles when user is logged
	useEffect(() => {
		if (isLoggedIn) {
			mainApi
				.getSavedArticles()
				.then((res) => {
					setSaveCardsData(res);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [isLoggedIn]);

	function handleSaveClick(card) {
		mainApi.markCard(card, cardKeyWord).then((res) => {
			setSaveCardsData([res, ...savedCardsData]);
		});
	}

	function handleUnSaveClick(id) {
		mainApi
			.unmarkCard(id)
			.then(() => {
				setSaveCardsData(savedCardsData.filter((item) => item._id !== id));
			})
			.catch(console.log);
	}

	function handlePopupSubmit(e) {
		e.preventDefault();
		if (isPopupSignInOpen) {
			auth
				.authorize(userEmail, userPassword)
				.then((res) => {
					if (res) {
						localStorage.setItem('jwt', res);
						setToken(res);
						setErrorMessage('');
						setIsLoggedIn(true);
						setIsPopupSignInOpen(false);
					} else {
						throw 'Incorrect email or password';
					}
				})
				.catch((err) => {
					setErrorMessage(err);
					return;
				});
		} else if (isPopupSignUpOpen) {
			auth
				.register(userEmail, username, userPassword)
				.then((res) => {
					setIsRegistrationSucceeded(true);
					setUserEmaill('');
					setUserPassword('');
					setUsername('');
					setIsPopupSignUpOpen(false);
					setIsInfoTooltip(true);
				})
				.catch((err) => {
					console.log(err);
					setIsInfoTooltip(true);
				});
		}
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
									username={username}
									onSearchSubmit={handleSearchSubmit}
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
									isLoading={isLoading}
									isNewsSerachOpen={isNewsSerachOpen}
									onSaveBtnClick={handleSaveClick}
									onUsaveBtnClick={handleUnSaveClick}
								/>
								<Popup
									isSignInOpen={isPopupSignInOpen}
									isSignUpOpen={isPopupSignUpOpen}
									onSignUpClick={handlePopupSwitch}
									onCloseClick={closeAllPopups}
									isInfoTooltipOpen={isInfoTooltipOpen}
									status={isRegistrationSucceeded}
									// onSubmit={handleSignInSubmit}
									onSubmit={handlePopupSubmit}
									setUserEmail={setUserEmaill}
									setUserPassword={setUserPassword}
									setUsername={setUsername}
									onSearchSubmit={handleSearchSubmit}
									errorMessage={errorMessage}
								/>
								<InfoTooltip
									onCloseClick={closeAllPopups}
									name={'registration'}
									onSignInClick={handleSignInClick}
									onSignUpClick={handleSignUpClick}
									status={isRegistrationSucceeded}
									isOpen={isInfoTooltipOpen}
								/>
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
											onUsaveBtnClick={handleUnSaveClick}
										/>
									</>
								}
								isLoggedIn={isLoggedIn}
							/>
						}
					/>
				</Routes>
				<Footer />
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
