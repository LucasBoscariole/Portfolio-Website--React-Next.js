import { Fragment, useState } from 'react';
import classes from './Contact.module.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaReddit } from 'react-icons/fa';

const Contact = ({ isContactOpen }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <Fragment>
      <section className={classes.wrapper}>
        {isContactOpen ? (
          <Fragment>
            <img
              src='/images/contactImage.jpg'
              alt='contact hero'
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
          <div className={classes.textcontainer}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name='message'
                id='message'
                placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type='submit'>Submit</button>
            </form>
            <div className={classes.text_contact}>
              <h3>Contact</h3>
              <p>freelancer@test.com</p>
              <h3>Based In</h3>
              <p>Paris, France</p>
              <div className={classes.flex}>
                <a
                  href='http://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaFacebook className={classes.svg} />
                </a>
                <a
                  href='http://instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaInstagram className={classes.svg} />
                </a>
                <a
                  href='http://linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedin className={classes.svg} />
                </a>
                <a
                  href='http://reddit.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaReddit className={classes.svg} />
                </a>
              </div>
            </div>
          </div>
          <div className={classes.imagecontainer}>
            <img src='/images/contactImage.jpg' alt='contact image' />
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default Contact;
