import './About.css';
import aboutPic from '../../images/aboutPic.gif';

function About() {
	return (
		<section className='about__container'>
			<img className='about__img' src={aboutPic} alt='auther ' />
			<div className='about__auther'>
				<h2 className='about__header'>About the auther</h2>
				<article className='about__article'>
					Hello! My name is Carolina Toren, A Yandex Full Stack Boot Camp student, at
					the final project stage.
				</article>
				<article className='about__article'>
					Studied Practical Software Engineering at the Technological College in Beer
					Sheva
				</article>

				<article className='about__article'>
					looking for a Junior Full Stack Developer position.
				</article>
			</div>
		</section>
	);
}

export default About;
