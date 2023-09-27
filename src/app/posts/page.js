import Head from 'next/head';
import { Fragment } from 'react';
import AllPosts from '../../../components/posts/all-posts';
import { getAllPosts } from '../../../lib/posts-util';

function AllPostsPage() {
const post=getAllPosts()
  console.log(post)
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={post} />
    </Fragment>
  );
}


export default AllPostsPage;
