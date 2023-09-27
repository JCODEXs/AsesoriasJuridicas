// containers/withPosts.js
import { getAllPosts } from "./posts-util";

const withPosts = (Component) => {
  const WrappedComponent = (props) => <Component {...props} />
  
  return WrappedComponent;
};

export const getProps = async () => {
  const allPosts = getAllPosts();
  console.log(allPosts)

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default withPosts;
