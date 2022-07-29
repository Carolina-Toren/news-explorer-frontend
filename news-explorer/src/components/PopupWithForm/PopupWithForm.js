import './PopupWithForm.css';
function PopupWithForm({isSignUpOpen, onSignUpClick}) {
	return (
		<>
			<label htmlFor='email' className='popup__lable' id='email'>
				Email
			</label>
			<input
				className='popup__input'
				placeholder='Enter email'
				id='email'
				required
				type='email'
			></input>
			<span
				className='popup__input-error popup__input-error_visible'
				id='email'
			></span>
			<label htmlFor='password' className='popup__lable' id='password'>
				Password
			</label>
			<input
				className='popup__input'
				placeholder='Enter password'
				id='password'
				required
				type='password'
			></input>
			<span
				className='popup__input-error popup__input-error_visible'
				id='password'
			></span>

			{isSignUpOpen && (
				<>
					<label htmlFor='username' className='popup__lable' id='password'>
						Username
					</label>
					<input
						className='popup__input'
						placeholder='Enter your username'
						id='username'
						required
					></input>
					<span
						className='popup__input-error popup__input-error_visible'
						id='username'
					></span>
				</>
			)}

			<form className='popup__form'>
				<span className='popup__server-error '>This email is not available</span>
				<button className='popup__submit-btn popup__submit-btn_unactive'>
					{!isSignUpOpen ? 'Sign in' : 'Sign up'}
				</button>
			</form>
		</>
	);
}

export default PopupWithForm;
