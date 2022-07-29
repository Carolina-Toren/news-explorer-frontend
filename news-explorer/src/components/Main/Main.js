import './Main.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main({
	isLoggedIn,
	savedCardsData,
	cardsData,
	allCards,
	onClick,
	setCardsToSave,
	cardsToSave,
}) {
	return (
		<NewsCardList
			savedCardsData={savedCardsData}
			listType={'home'}
			isLoggedIn={isLoggedIn}
			cardsData={cardsData}
			onClick={onClick}
			allCards={allCards}
			setCardsToSave={setCardsToSave}
			cardsToSave={cardsToSave}
		/>
	);
}

export default Main;
