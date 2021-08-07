import Head from 'next/head';
import { Fragment } from 'react';

export default function Item({ title, description, image }) {
  return (
    <Fragment>
      <Head>
        <title>My Portfolio | {title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>{title}</h1>
    </Fragment>
  );
}

export async function getStaticProps({ ...ctx }) {
  const portfolioData = await import(`../../portfolio.json`);

  let currentItem = portfolioData.items.filter((i) => {
    return i.slug === ctx.params.service;
  });

  let { title, description, image } = currentItem[0];

  return {
    props: {
      title,
      description,
      image,
    },
  };
}

export async function getStaticPaths() {
  const portfolioData = await import(`../../portfolio.json`);
  let slugs = portfolioData.items.map((i) => i.slug);
  let paths = slugs.map((slug) => {
    return { params: { service: slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
