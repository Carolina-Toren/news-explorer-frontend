import './SavedNewsHeader.css';
import {useEffect, useState} from 'react';

function SavedNewsHeader({isLoggedIn, user, savedCardsData}) {
	const [keywordString, setKeywordString] = useState('');

	//set keywords strings
	useEffect(() => {
		if (!savedCardsData) return;
		const keywordcount = {};
		savedCardsData.forEach((card) => {
			if (!keywordcount[card.keyword]) keywordcount[card.keyword] = 1;
			else keywordcount[card.keyword]++;
		});
		let arrKeywords = Object.keys(keywordcount).map((item) => {
			return [item, keywordcount[item]];
		});
		arrKeywords.sort((a, b) => b[1] - a[1]);
		arrKeywords = arrKeywords.flat().filter((item) => typeof item === 'string');
		if (arrKeywords.length <= 3) {
			arrKeywords = arrKeywords.join(', ');
			setKeywordString(arrKeywords);
		} else {
			const keywordSum = arrKeywords.length;
			arrKeywords = [arrKeywords[0], arrKeywords[1]];
			arrKeywords = arrKeywords.join(', ');
			const string = `${arrKeywords}, and ${keywordSum - 2} other`;
			setKeywordString(string);
		}
	}, [savedCardsData]);

	return (
		<section className='saved__header-container'>
			<p className='saved__header'>Saved articles</p>
			<h2 className='saved__sub-header'>{`${user.name}, you have ${savedCardsData.length} saved articles`}</h2>
			<p className='saved__keywords'>
				By keywords: <b>{keywordString}</b>
			</p>
		</section>
	);
}

export default SavedNewsHeader;
