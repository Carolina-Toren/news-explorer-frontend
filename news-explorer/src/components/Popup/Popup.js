import './Popup.css';
import Register from '../Register/Register';
import Login from '../Login/Login';

function Popup({
	isSignInOpen,
	isSignUpOpen,
	onCloseClick,
	onSignUpClick,
	isInfoTooltipOpen,
	onSignupSubmit,
	onSubmit,
	setUsername,
	setUserEmail,
	setUserPassword,
	errorMessage,
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

				{isSignUpOpen ? (
					<Register
						onSignUpClick={onSignUpClick}
						isSignUpOpen={isSignUpOpen}
						isSignInOpen={isSignInOpen}
						isInfoTooltipOpen={isInfoTooltipOpen}
						onSubmit={onSubmit}
						setUsername={setUsername}
						setUserEmail={setUserEmail}
						setUserPassword={setUserPassword}
					/>
				) : (
					<Login
						onSignUpClick={onSignUpClick}
						isSignUpOpen={isSignUpOpen}
						isSignInOpen={isSignInOpen}
						isInfoTooltipOpen={isInfoTooltipOpen}
						onSubmit={onSubmit}
						setUserEmail={setUserEmail}
						setUserPassword={setUserPassword}
						errorMessage={errorMessage}
					/>
				)}
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
