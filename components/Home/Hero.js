import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import classes from './Hero.module.css';
import image from '../../images/backgroundHome.png';

const Hero = () => {
  return (
    <section className={classes.container}>
      <img src={image} alt='photographer background' />
      <article className={classes.text}>
        <h2>Welcome</h2>
        <h1>I'm Froddy Jeorge</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          voluptatibus iure ipsa consequatur dolores at repellendus quo
          doloremque et quam maxime deleniti tempore quasi vero odit repudiandae
          asperiores dolore in?
        </p>
        <Link href='/services'>services</Link>
      </article>
      <article className={classes.icons}>
        <a href='https://instagram.com' target='_blank'>
          <FaInstagram />
        </a>
        <a href='https://facebook.com' target='_blank'>
          <FaFacebook />
        </a>
        <a href='https://linkedin.com' target='_blank'>
          <FaLinkedin />
        </a>
      </article>
    </section>
  );
};

export default Hero;
