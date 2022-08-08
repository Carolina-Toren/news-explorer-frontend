import './SavedNews.css';
import '../NewsCardList/NewsCardList';
import Navagation from '../Navigation/Nagation';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
function SavedNews({
	isLoggedIn,
	headerType,
	onHomeClick,
	onSavedClick,
	onLogoutClick,
	savedCardsData,
	isCardsHover,
	setIsCardHover,
	setCardsToSave,
	cardsToSave,
	user,
	onHamburgerMenuClick,
	isHambuergerMenuOpen,
	isMobile,
	onUsaveBtnClick,
}) {
	return (
		<section className='saved__container'>
			<Navagation
				headerType={headerType}
				isLoggedIn={isLoggedIn}
				onHomeClick={onHomeClick}
				onSavedClick={onSavedClick}
				onLogoutClick={onLogoutClick}
				onHamburgerMenuClick={onHamburgerMenuClick}
				isHambuergerMenuOpen={isHambuergerMenuOpen}
				isMobile={isMobile}
				user={user}
			/>
			<SavedNewsHeader
				isLoggedIn={isLoggedIn}
				user={user}
				savedCardsData={savedCardsData}
			/>
			<NewsCardList
				savedCardsData={savedCardsData}
				listType={'saved'}
				isCardsHover={isCardsHover}
				setIsCardHover={setIsCardHover}
				isLoggedIn={isLoggedIn}
				setCardsToSave={setCardsToSave}
				cardsToSave={cardsToSave}
				onUsaveBtnClick={onUsaveBtnClick}
			/>
		</section>
	);
}

export default SavedNews;
