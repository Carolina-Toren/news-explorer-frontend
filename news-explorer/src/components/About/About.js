import './About.css';
import aboutPic from '../../images/aboutPic.gif';

function About() {
	return (
		<section className='about__container'>
			<img className='about__img' src={aboutPic} alt='auther ' />
			<div className='about__auther'>
				<h2 className='about__header'>About the auther</h2>
				<p className='about__text'>
					Hello! My name is Carolina Toren, A Yandex Full Stack Boot Camp student, at
					the final project stage.
				</p>
				<p className='about__text'>
					Studied Practical Software Engineering at the Technological College in Beer
					Sheva
				</p>

				<p className='about__text'>
					looking for a Junior Full Stack Developer position.
				</p>
			</div>
		</section>
	);
}

export default About;
