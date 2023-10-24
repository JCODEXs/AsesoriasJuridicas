import PostItem from './post-item';
import classes from './posts-grid.module.css';

function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
        <div style={{display:"flex",justifyContent:"center", fontSize:"1.5rem"}}>Sentencias destacadas</div>
      {posts?.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
