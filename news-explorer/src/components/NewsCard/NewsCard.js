import './NewsCard.css';
import {useRef} from 'react';

function NewsCard({
	imgSrc,
	cardDate,
	cardTitle,
	cardSubtitle,
	cardCaption,
	cardKeyWord,
	listType,
	isLoggedIn,
	cardLink,
	id,
	onSaveBtnClick,
	onUsaveBtnClick,
	savedCardsData,
}) {
	const message = useRef();

	function handleBtnHover(listType) {
		if (listType === 'home' && !isLoggedIn) {
			message.current.classList.toggle('card__btn_visible');
		} else if (listType === 'saved') {
			message.current.classList.toggle('card__btn_visible');
		}
	}

	function handleBtnClick(e) {
		const card = {
			imgSrc,
			cardDate,
			cardTitle,
			cardSubtitle,
			cardCaption,
			cardKeyWord,
			cardLink,
		};
		if (isLoggedIn && listType === 'home') {
			e.target.classList.toggle('card__btn_marked');
			if (e.target.classList.contains('card__btn_marked')) {
				onSaveBtnClick(card);
				return;
			} else {
				const cardToDelete = savedCardsData.find(
					(item) => item.text === card.cardSubtitle
				);
				onUsaveBtnClick(cardToDelete._id);
				return;
			}
		} else {
			onUsaveBtnClick(id);
		}
	}

	function handleDateChange(month) {
		const date = new Date();
		date.setMonth(month - 1);
		const monthName = date.toLocaleString('en-US', {month: 'long'});
		return monthName;
	}

	const dateList = cardDate.replace(/T[0-9]+:[0-9]+:[0-9]+Z/, '').split('-');
	const month = handleDateChange(dateList[1]);
	const date = `${month} ${dateList[2]}, ${dateList[0]}`;
	return (
		<li className='card'>
			<img className='card__img' src={imgSrc} alt={'article'} />
			<button
				onMouseEnter={() => handleBtnHover(listType)}
				onMouseLeave={() => handleBtnHover(listType)}
				onClick={handleBtnClick}
				className={`card__btn card__btn_unmarked ${
					listType === 'home' ? 'card__btn_visible' : ''
				} `}
			></button>
			<button
				onMouseEnter={() => handleBtnHover(listType)}
				onMouseLeave={() => handleBtnHover(listType)}
				className={`card__btn card__btn_delete ${
					listType === 'saved' ? 'card__btn_visible' : ''
				} `}
				onClick={handleBtnClick}
			></button>
			<button className='card__btn card__btn_ishover' ref={message}>
				{listType === 'home' && !isLoggedIn
					? 'Sign in to save articles'
					: listType === 'saved'
					? 'Remove from saved'
					: ''}
			</button>
			<button
				className={`card__btn card__btn_keyword ${
					listType === 'saved' ? 'card__btn_visible' : ''
				} `}
			>
				{cardKeyWord}
			</button>

			<p className='card__date'>{date}</p>
			<a className='card__link' href={cardLink} target='_blank'>
				<div className='card__text-container'>
					<h3 className='card__text-header'>{cardTitle}</h3>
					<p className='card__text'>{cardSubtitle}</p>
					<p className='card__text-source'>{cardCaption}</p>
				</div>
			</a>
		</li>
	);
}

export default NewsCard;
