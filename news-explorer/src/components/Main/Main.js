import './Main.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main({
	isLoggedIn,
	savedCardsData,
	cardsData,
	allCards,
	onClickMore,
	setCardsToSave,
	cardsToSave,
}) {
	return (
		<NewsCardList
			savedCardsData={savedCardsData}
			listType={'home'}
			isLoggedIn={isLoggedIn}
			cardsData={cardsData}
			onClick={onClickMore}
			allCards={allCards}
			setCardsToSave={setCardsToSave}
			cardsToSave={cardsToSave}
		/>
	);
}

export default Main;
