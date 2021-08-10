const { default: Link } = require('next/link');
import { Fragment } from 'react';
import classes from './About.module.css';

const About = ({ isAboutPage }) => {
  return (
    <section className={classes.wrapper}>
      {isAboutPage ? (
        <img
          src='/images/aboutHero.jpg'
          alt='about hero'
          className={classes.hero}
        />
      ) : null}
      {isAboutPage ? (
        <h1 className={classes.heroActive}>About Me</h1>
      ) : (
        <Fragment>
          {' '}
          <h1 className={classes.header}>About Me</h1>
          <div className={classes.underline}></div>
        </Fragment>
      )}
      <article className={classes.container}>
        <div className={classes.containerimg}>
          <img src='/images/about.jpg' alt='' className={classes.image} />
        </div>
        <div className={classes.containertext}>
          <h2>Who am I?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            ducimus, sint nisi quia quam veritatis consequuntur nemo illum velit
            deserunt quos tempore quas. Provident praesentium veniam aspernatur
            rem obcaecati, nesciunt totam natus dignissimos reiciendis corrupti
            alias sed mollitia neque magni quas, quaerat esse consequatur. Natus
            animi, eum labore ad reiciendis earum harum voluptates ipsam ab in
            perspiciatis dolore quis quod corporis, iure tempora! Quas, tempora?
            Officia neque saepe commodi eaque.
          </p>
          <h2>Why Me?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe
            debitis natus quo porro expedita ab, dolores nemo id ipsum nihil
            aliquid dolorum? Possimus eligendi, quibusdam voluptate unde nobis
            iste molestiae, doloribus accusantium perferendis, incidunt officia
            voluptatibus recusandae quas ullam accusamus architecto facilis
            explicabo! Eius sed exercitationem earum beatae repellendus nisi
            dolorem dicta sunt necessitatibus incidunt nostrum fuga maiores
            tenetur doloribus qui sit distinctio, cum aliquam consectetur hic.
            Laudantium, quaerat!
          </p>
          <Link href='/contact'>Contact Me</Link>
        </div>
      </article>
    </section>
  );
};

export default About;
