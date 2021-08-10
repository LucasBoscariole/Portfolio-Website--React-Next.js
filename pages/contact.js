import Head from 'next/head';
import { Fragment } from 'react';
import ContactPage from '@components/Contact/Contact';

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>My Portfolio | Contact</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Contact Information' />
      </Head>
      <main>
        <ContactPage isContactOpen />
      </main>
    </Fragment>
  );
}
