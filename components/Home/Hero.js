import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaReddit } from 'react-icons/fa';
import TextTransition from 'react-text-transition';
import classes from './Hero.module.css';
// import Image from 'next/image';

const TEXT = ['a Photographer', 'George Griffin', 'from USA'];

const Hero = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1), 3000;
    });
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
        <h1>
          I'm{' '}
          <TextTransition
            text={TEXT[index % TEXT.length]}
            springConfig={presents.gentle}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          minima hic quaerat excepturi culpa reiciendis assumenda iusto
          deserunt, sit quibusdam. Voluptas possimus nobis, temporibus quis
          porro sapiente a sit numquam.
        </p>
        <Link href='/services'>services</Link>
        <Link href='/contact'>Contact</Link>
        <div className={classes.textcontainer}>
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaReddit />
        </div>
      </article>
    </section>
  );
};

export default Hero;
