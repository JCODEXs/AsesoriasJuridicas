import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>Archivo de Sentencias</h1>
<p> Aca podra encontrar algunas de las sentencias mas importantes en formato pdf </p>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
