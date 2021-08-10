import Link from 'next/link';
// import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaReddit } from 'react-icons/fa';
// import TextTransition, { presets } from 'react-text-transition';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.container}>
      <img
        src='/images/background.jpg'
        alt='background image'
        className={classes.image}
      />
      <div className={classes.black_background}></div>
      <article className={classes.text}>
        <h3>Welcome</h3>
        <h1>I'm a photographer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          minima hic quaerat excepturi culpa reiciendis assumenda iusto
          deserunt, sit quibusdam. Voluptas possimus nobis, temporibus quis
          porro sapiente a sit numquam.
        </p>
        <Link href='/contact'>Contact</Link>
        <div className={classes.textcontainer}>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook />
          </a>
          <a
            href='https://intagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://reddit.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaReddit />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Hero;
