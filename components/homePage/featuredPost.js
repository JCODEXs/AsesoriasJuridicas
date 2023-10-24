import PostsGrid from '../posts/posts-grid';
import classes from './featuredPost.module.css';

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
    
     
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;