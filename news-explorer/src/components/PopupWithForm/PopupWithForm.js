import './PopupWithForm.css';
import {useForm} from '../../formHooks/useForm';
import {useEffect, useRef} from 'react';
function PopupWithForm({
	isSignUpOpen,
	isSignInOpen,
	onSubmit,
	onSignupSubmit,
	setUsername,
	setUserEmail,
	setUserPassword,
	errorMessage,
}) {
	const {handleInputChange, values, isValid, errors, resetForm} = useForm();

	function handleErrorVisible() {
		if (!isValid) {
			return 'popup__input-error popup__input-error_visible';
		} else {
			return 'popup__input-error';
		}
	}

	const button = useRef();

	useRef(() => {
		if (!isValid) {
			button.current.setAttribute('disables', '');
		} else {
			button.current.removeAttribute('disables', '');
		}
	});

	useEffect(() => {
		if (!isSignInOpen || !isSignUpOpen) resetForm();
	}, [isSignInOpen, isSignUpOpen]);

	return (
		<form className={'popup__form'} onSubmit={onSubmit}>
			<label htmlFor='email' className='popup__lable' id='email'>
				Email
			</label>
			<input
				className='popup__input'
				placeholder='Enter email'
				id='email'
				required
				value={values.email || ''}
				type='email'
				onChange={(e) => {
					setUserEmail(e.target.value);
					handleInputChange(e);
				}}
			></input>
			<span className={handleErrorVisible()} id='email'>
				{errors.email}
			</span>
			<label htmlFor='password' className='popup__lable' id='password'>
				Password
			</label>
			<input
				className='popup__input'
				placeholder='Enter password'
				id='password'
				required
				minLength={8}
				value={values.password || ''}
				type='password'
				autoComplete='on'
				onChange={(e) => {
					setUserPassword(e.target.value);
					handleInputChange(e);
				}}
			></input>
			<span className={handleErrorVisible()} id='password'>
				{errors.password}
			</span>

			{isSignUpOpen ? (
				<>
					<label htmlFor='username' className='popup__lable' id='password'>
						Username
					</label>
					<input
						className='popup__input'
						placeholder='Enter your username'
						id='username'
						required
						value={values.username || ''}
						onChange={(e) => {
							setUsername(e.target.value);
							handleInputChange(e);
						}}
					></input>
					<span className={handleErrorVisible()} id='username'>
						{errors.username}
					</span>
				</>
			) : (
				''
			)}

			<span className='popup__server-error '>{errorMessage}</span>
			<button
				ref={button}
				className={`popup__submit-btn ${
					!isValid ? 'popup__submit-btn_unactive' : 'popup__submit-btn_active'
				} `}
			>
				{!isSignUpOpen ? 'Sign in' : 'Sign up'}
			</button>
		</form>
	);
}

export default PopupWithForm;
