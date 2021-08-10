import { Fragment } from 'react';
import classes from './Service.module.css';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const Service = ({ title, description, image, price, hour }) => {
  return (
    <Fragment>
      <img src={image} alt={title} className={classes.image} />
      <h1 className={classes.title}>Services/{title}</h1>
      <main className={classes.wrapper}>
        <section className={classes.imageContainer}>
          <img src={image} alt={title} />
        </section>
        <section className={classes.textContainer}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>
            <FaChevronRight /> {price} {hour ? 'EUR/Hr' : 'EUR'}
          </p>
          <Link href='/contact'>Contact</Link>
        </section>
      </main>
    </Fragment>
  );
};

export default Service;
