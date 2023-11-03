import PostsGrid from '../posts/posts-grid';
import classes from './featuredPost.module.css';

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
    <div style={{display:"flex",justifyContent:"center", fontSize:"1.6rem",margin:"1rem",fontWeight:500}}>Sentencias destacadas</div>
     
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;