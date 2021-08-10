import About from '@components/About/About';
import Hero from '@components/Home/Hero';
import Services from '@components/Services/Services';
import Head from 'next/head';
import { Fragment } from 'react';

export default function Home({ items }) {
  return (
    <Fragment>
      <Head>
        <title>My Portfolio Example</title>
        <meta name='description' content='This is the first page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <About />
      <Services items={items} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const portfolioData = await import(`../portfolio.json`);

  let slugs = [];
  portfolioData.items.map((i) => {
    slugs.concat(i.slug);
  });

  return {
    props: {
      items: portfolioData.items,
    },
  };
}
