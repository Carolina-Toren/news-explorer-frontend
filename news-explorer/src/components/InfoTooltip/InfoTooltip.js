import '../Popup/Popup.css';

function InfoTooltip({
	onCloseClick,
	name,
	status,
	onSignInClick,
	onSignUpClick,
	isOpen,
}) {
	return (
		<div className={`popup popup_${name} ${isOpen ? 'popup_visible' : ''} `}>
			<div className='popup__window'>
				<button
					className='popup__close-btn'
					id='close_btn_registration'
					type='button'
					onClick={onCloseClick}
				/>
				<h2 className='popup_registration-text'>
					{status === false
						? 'Oops, something went wrong! Please try again.'
						: 'Registration successfully completed!'}
				</h2>
				<p
					className='popup_registration-link'
					onClick={status === false ? onSignUpClick : onSignInClick}
				>
					{status === false ? 'Sign up' : 'Sign in'}
				</p>
			</div>
		</div>
	);
}
export default InfoTooltip;
