import About from '@components/About/About';
import Head from 'next/head';
import { Fragment } from 'react';

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>My Portfolio | About</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='About Page' />
      </Head>
      <About isAboutPage />
    </Fragment>
  );
}
