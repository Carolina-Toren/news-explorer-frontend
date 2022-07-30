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
		if (isLoggedIn) e.target.classList.toggle('card__btn_marked');
	}
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

			<p className='card__date'>{cardDate}</p>
			<div className='card__text-container'>
				<h3 className='card__text-header'>{cardTitle}</h3>
				<p className='card__text'>{cardSubtitle}</p>
				<p className='card__text-source'>{cardCaption}</p>
			</div>
		</li>
	);
}

export default NewsCard;
