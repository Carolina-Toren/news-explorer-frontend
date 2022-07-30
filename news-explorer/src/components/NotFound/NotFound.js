import './NotFound.css';
import notFoundImg from '../../images/not-found.svg';

function NotFound() {
	return (
		<div className='notfound__container'>
			<img className='notfound__img' alt='not found' src={notFoundImg} />
			<h3 className='notfound__header'>Nothing found</h3>
			<p className='notfound__text'>
				Sorry, but nothing matched your search terms.
			</p>
		</div>
	);
}

export default NotFound;
