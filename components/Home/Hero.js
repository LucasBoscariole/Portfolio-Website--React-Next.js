import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaReddit } from 'react-icons/fa';
import classes from './Hero.module.css';
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['a Photographer', 'George Griffin', 'from Paris'];

const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      4000 // every 4 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
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
        <div className={classes.flex}>
          <h1>I'm </h1>
          <h1>
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.slow}
            />
          </h1>
        </div>
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
