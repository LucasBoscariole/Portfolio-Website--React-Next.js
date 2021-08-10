import Link from 'next/link';
import { Fragment } from 'react';
import classes from './Services.module.css';
import { FaChevronRight } from 'react-icons/fa';

const Services = ({ items, isServicesOpen }) => {
  return (
    <section className={classes.wrapper}>
      {isServicesOpen ? (
        <Fragment>
          <img
            src='/images/servicesHero.jpg'
            alt='services hero'
            className={classes.image}
          />
          <h1 className={classes.header_services}>Services</h1>
        </Fragment>
      ) : (
        <Fragment>
          <h1 className={classes.header}>Services</h1>
          <div className={classes.underline}></div>
        </Fragment>
      )}
      <article className={classes.container}>
        {items.map((item, index) => {
          return (
            <Link key={index} href={`/services/${item.slug}`}>
              <div className={classes.container_content}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={classes.image_content}
                />
                <h3 className={classes.header_content}>{item.title}</h3>
                <p className={classes.p_content}>{item.description}</p>
                <p className={classes.p_content}>
                  <FaChevronRight className={classes.svg_content} />
                  {item.price}
                  {item.hour ? ' EUR/Hr' : ' EUR'}
                </p>
              </div>
            </Link>
          );
        })}
      </article>
    </section>
  );
};

export default Services;
