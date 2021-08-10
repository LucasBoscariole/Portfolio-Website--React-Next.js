import Services from '@components/Services/Services';
import Head from 'next/head';
import { Fragment } from 'react';

export default function Contact({ items }) {
  return (
    <Fragment>
      <Head>
        <title>My Portfolio | Services</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content="i'm a photographer based in Paris. This is the services that I provide."
        />
      </Head>
      <Services items={items} isServicesOpen />
    </Fragment>
  );
}

export async function getStaticProps() {
  const portfolioData = await import(`../../portfolio.json`);

  return {
    props: {
      items: portfolioData.items,
    },
  };
}
