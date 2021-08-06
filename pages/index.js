import Head from 'next/head'
import { Fragment } from 'react'

export default function Home({ items }) {
  return (
    <Fragment>
      <Head>
        <title>My Portfolio Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {items.map((item,index) => <h1 key={index}>{item.title}</h1>)}
    </Fragment>
  )
}

export async function getStaticProps() {
  const portfolioData = await import(`../portfolio.json`)

  let slugs = []
  portfolioData.items.map((i) => {
    slugs.concat(i.slug)
  })

  return {
    props: {
      items: portfolioData.items,
    },
  }
}
