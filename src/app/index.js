import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '../../components/homePage/featuredPost';
import Hero from '../../components/homePage/hero';
import { getFeaturedPosts } from '../../lib/posts-util';

function HomePage(props) {
  const featuredPosts = getFeaturedPosts();
  return (
    <Fragment>
      <Head>
        <title>Pensiones Colombianos</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </Fragment>
  );
}



  

export default HomePage;