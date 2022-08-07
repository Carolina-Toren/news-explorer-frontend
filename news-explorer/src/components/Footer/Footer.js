import './Footer.css';

function Footer() {
	return (
		<footer className='footer'>
			<h2 className='footer__copyrigt'>© 2022 Supersite, Powered by News API</h2>
			<ul className='footer__list'>
				<li className='footer__list-item footer__list-item_info'>
					<a className='footer__list-link' href='./'>
						Home
					</a>
					<a
						className='footer__list-link'
						href='https://practicum.com/en-isr/'
						rel='noreferrer'
						target='_blank'
					>
						Practicum by Yandex
					</a>
				</li>

				<li className='footer__list-item footer__list-item_social'>
					<a
						className='footer__list-icon footer__icon_github'
						href='https://github.com/Carolina-Toren'
						target='_blank'
						rel='noreferrer'
					></a>
					<a
						className='footer__list-icon footer__icon_facebook'
						href='https://www.facebook.com/Practicum.Israel.bootcamp/'
						target='_blank'
						rel='noreferrer'
					></a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
