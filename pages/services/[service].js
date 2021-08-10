import Service from '@components/SinglePage/Service';
import Head from 'next/head';
import { Fragment } from 'react';

export default function Item({
  title,
  meta_description,
  description,
  image,
  price,
  hour,
}) {
  return (
    <Fragment>
      <Head>
        <title>My Portfolio | {title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={meta_description} />
      </Head>
      <Service
        title={title}
        description={description}
        image={image}
        price={price}
        hour={hour}
      />
    </Fragment>
  );
}

export async function getStaticProps({ ...ctx }) {
  const portfolioData = await import(`../../portfolio.json`);

  let currentItem = portfolioData.items.filter((i) => {
    return i.slug === ctx.params.service;
  });

  let { title, meta_description, description, image, price, hour } =
    currentItem[0];

  return {
    props: {
      title,
      meta_description,
      description,
      image,
      price,
      hour,
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
