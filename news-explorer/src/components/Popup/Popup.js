import './Popup.css';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Popup({
	isSignInOpen,
	isSignUpOpen,
	onCloseClick,
	onSignUpClick,
	isInfoTooltipOpen,
}) {
	const PopupType = isSignInOpen ? 'Sign in' : 'Sign up';

	return (
		<div
			className={`popup ${isSignInOpen || isSignUpOpen ? 'popup_visible' : ''} `}
		>
			<div className='popup__window'>
				<button
					className='popup__close-btn'
					type='button'
					aria-label='Close button'
					onClick={onCloseClick}
				></button>
				<h2 className='popup__header'>{PopupType}</h2>
				<PopupWithForm onSignUpClick={onSignUpClick} isSignUpOpen={isSignUpOpen} />
				<button className='popup__link-container'>
					<p className='popup__link-text'>or </p>
					<span className='popup__link' onClick={onSignUpClick}>
						{isSignUpOpen ? 'Sign in' : 'Sign up'}
					</span>
				</button>
			</div>
		</div>
	);
}

export default Popup;
