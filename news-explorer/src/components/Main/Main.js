import './Main.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main({
	isLoggedIn,
	savedCardsData,
	cardsData,
	allCards,
	onClickMore,
	setCardsToSave,
	cardsToSave,
	isLoading,
	isNewsSerachOpen,
	onSaveBtnClick,
	onUsaveBtnClick,
	onNotLoggedInClick,
}) {
	return (
		<>
			{isNewsSerachOpen ? (
				<NewsCardList
					savedCardsData={savedCardsData}
					listType={'home'}
					isLoggedIn={isLoggedIn}
					cardsData={cardsData}
					onClick={onClickMore}
					allCards={allCards}
					setCardsToSave={setCardsToSave}
					cardsToSave={cardsToSave}
					isLoading={isLoading}
					onSaveBtnClick={onSaveBtnClick}
					onUsaveBtnClick={onUsaveBtnClick}
					onNotLoggedInClick={onNotLoggedInClick}
				/>
			) : (
				''
			)}
			// <About />
		</>
	);
}

export default Main;
