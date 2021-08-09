const { default: Link } = require('next/link');
import classes from './About.module.css';

const About = () => {
  return (
    <section className={classes.wrapper}>
      <h1 className={classes.header}>About Me</h1>
      <div className={classes.underline}></div>
      <article className={classes.container}>
        <img src='' alt='' className={classes.image} />
        <div className={classes.containertext}>
          <h2>Who am I?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam
            blanditiis nemo voluptas, repellat incidunt, laboriosam explicabo
            architecto veritatis dolorum dolor nobis esse adipisci sed natus
            ratione earum aliquid deserunt pariatur molestias consequuntur nisi.
            Distinctio quasi cum officia minus maxime ipsum ipsa. Cumque earum
            officia ab illum ex commodi. Nostrum quisquam impedit iusto corrupti
            vitae aperiam totam recusandae dolore tempore.
          </p>
          <Link href='/contact'>Contact Me</Link>
        </div>
      </article>
    </section>
  );
};

export default About;
