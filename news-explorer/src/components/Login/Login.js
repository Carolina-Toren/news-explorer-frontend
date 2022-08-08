import './Login.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login({
	isInfoToolOpen,
	isSignUpOpen,
	isSignInOpen,
	onCloseClick,
	OnSignUpClick,
	onSubmit,
	status,
	setUserEmail,
	setUserPassword,
	errorMessage,
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
			setUserEmail={setUserEmail}
			setUserPassword={setUserPassword}
			errorMessage={errorMessage}
		/>
	);
}

export default Login;
