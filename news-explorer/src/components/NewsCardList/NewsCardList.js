import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
// import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';

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
	isLoading,
	onSaveBtnClick,
	onUsaveBtnClick,
	onNotLoggedInClick,
}) {
	return (
		<>
			{!isLoading ? (
				<section className='cards'>
					{listType === 'home' && !isLoading ? (
						<h2 className='cards__header'>Search results</h2>
					) : (
						''
					)}
					<ul className='cards__grid'>
						{listType === 'home'
							? cardsData.map((card) => {
									return (
										<NewsCard
											key={card.id}
											imgSrc={card.urlToImage}
											cardDate={card.publishedAt}
											cardTitle={card.title}
											cardSubtitle={card.description}
											cardCaption={card.source.name}
											cardKeyWord={card.keyword}
											cardLink={card.url}
											setIsCardHover={setIsCardHover}
											isLoggedIn={isLoggedIn}
											card={card}
											id={card.id}
											listType={listType}
											isCardsHover={isCardsHover}
											onSaveBtnClick={onSaveBtnClick}
											onUsaveBtnClick={onUsaveBtnClick}
											savedCardsData={savedCardsData}
											onNotLoggedInClick={onNotLoggedInClick}
										/>
									);
							  })
							: savedCardsData.map((card) => {
									return (
										<NewsCard
											id={card._id}
											key={card._id}
											imgSrc={card.image}
											cardTitle={card.title}
											cardSubtitle={card.text}
											cardCaption={card.source}
											cardKeyWord={card.keyword}
											cardLink={card.link}
											cardDate={card.date}
											setIsCardHover={setIsCardHover}
											isLoggedIn={isLoggedIn}
											cardsToSave={cardsToSave}
											setCardsToSave={setCardsToSave}
											card={card}
											listType={listType}
											isCardsHover={isCardsHover}
											onUsaveBtnClick={onUsaveBtnClick}
										/>
									);
							  })}
					</ul>
					{listType === 'home' && allCards.length !== cardsData.length ? (
						<button className='cards__grid-btn' onClick={onClick}>
							Show more
						</button>
					) : (
						''
					)}
				</section>
			) : (
				<Preloader />
			)}
		</>
	);
}

export default NewsCardList;
