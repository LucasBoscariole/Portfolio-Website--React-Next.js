const { default: Link } = require('next/link');
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.flex_one}>
        <h3>My Mission</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          eveniet magnam quas est suscipit itaque inventore iste laborum? Non
          vero eos commodi hic eum repudiandae aliquid voluptate, optio illo. Et
          nobis rerum quae, non earum iste culpa eius assumenda animi.
        </p>
      </div>
      <div className={classes.flex_two}>
        <div className={classes.container}>
          <h3>Explore</h3>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/services'>Services</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <div className={classes.container}>
          <h3>Follow Me</h3>
          <a
            href='http://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Facebook
          </a>
          <a
            href='http://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </a>
          <a
            href='http://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Linkedin
          </a>
          <a href='http://reddit.com' target='_blank' rel='noopener noreferrer'>
            Reddit
          </a>
        </div>
        <div className={classes.container}>
          <h3>New Business</h3>
          <p>freelancer@test.com</p>
          <p>+1 123 456 789</p>
          <p>California, USA</p>
          <p>Photographer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
