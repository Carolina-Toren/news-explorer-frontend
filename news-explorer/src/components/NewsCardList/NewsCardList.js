import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
// import NotFound from '../NotFound/NotFound';

function NewsCardList({
	savedCardsData,
	listType,
	isCardsHover,
	setIsCardHover,
	isLoggedIn,
	cardsData,
	allCards,
	onClick,
	setCardsToSave,
	cardsToSave,
}) {
	return (
		<section className='cards__container'>
			{listType === 'home' ? (
				<h2 className='cards__header'>Search results</h2>
			) : (
				''
			)}
			<ul className='cards__grid'>
				{listType === 'home'
					? cardsData.map((card) => {
							return (
								<NewsCard
									imgSrc={card.img}
									cardDate={card.date}
									cardTitle={card.title}
									cardSubtitle={card.subtitle}
									cardCaption={card.caption}
									cardKeyWord={card.keyword}
									setIsCardHover={setIsCardHover}
									isLoggedIn={isLoggedIn}
									card={card}
									listType={listType}
									key={card.id}
									isCardsHover={isCardsHover}
								/>
							);
					  })
					: savedCardsData.map((card) => {
							return (
								<NewsCard
									imgSrc={card.img}
									cardTitle={card.title}
									cardSubtitle={card.subtitle}
									cardCaption={card.caption}
									cardKeyWord={card.keyword}
									setIsCardHover={setIsCardHover}
									isLoggedIn={isLoggedIn}
									cardsToSave={cardsToSave}
									setCardsToSave={setCardsToSave}
									card={card}
									listType={listType}
									key={card.id}
									isCardsHover={isCardsHover}
								/>
							);
					  })}
			</ul>
			{listType === 'home' && allCards.length !== cardsData.length ? (
				<button className='grid__btn' onClick={onClick}>
					Show more
				</button>
			) : (
				''
			)}
		</section>
	);
}

export default NewsCardList;
