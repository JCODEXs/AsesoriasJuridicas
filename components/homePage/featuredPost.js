import PostsGrid from "../posts/posts-grid";
import classes from "./featuredPost.module.css";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.6rem",
          margin: "1rem",
          fontWeight: 500,
        }}
      >
        Sentencias destacadas
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingInline: "3rem",
          background: "linear-gradient(to bottom,#DFE0E0,#575B66,#DFE0E0)",
        }}
      >
        <PostsGrid posts={props.posts} />
      </div>
    </section>
  );
}

export default FeaturedPosts;
