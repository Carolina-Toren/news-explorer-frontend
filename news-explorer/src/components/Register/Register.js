import './Register.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function Register({
	isInfoToolOpen,
	isSignUpOpen,
	isSignInOpen,
	onCloseClick,
	OnSignUpClick,
	onSubmit,
	status,
	onSignupSubmit,
	setUsername,
	setUserEmail,
	setUserPassword,
}) {
	return (
		<PopupWithForm
			isInfoToolOpen={isInfoToolOpen}
			isSignUpOpen={isSignUpOpen}
			isSignInOpen={isSignInOpen}
			onCloseClick={onCloseClick}
			OnSignUpClick={OnSignUpClick}
			onSubmit={onSubmit}
			status={status}
			// onSignupSubmit={onSignupSubmit}
			setUsername={setUsername}
			setUserEmail={setUserEmail}
			setUserPassword={setUserPassword}
		/>
	);
}
