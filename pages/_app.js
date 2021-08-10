import Header from '@components/Header/Header';
import Dropdown from '@components/Header/Dropdown';
import { Fragment, useState } from 'react';
import '../styles/globals.css';
import Footer from '@components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  // Toggle Menu
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // Toggle Menu
  return (
    <Fragment>
      <Header toggle={toggle} />
      <Dropdown toggle={toggle} isopen={isOpen} />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
