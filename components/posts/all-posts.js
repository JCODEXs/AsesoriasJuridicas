import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>Archivo de Sentencias</h1>
      <br></br>
<p> Estos caso ilustran la importancia de las sentencias de la Corte Suprema de Justicia para aclarar cuestiones relacionadas con los traslados de pensiones y establecer la interpretación de la ley en asuntos de seguridad social.

Las sentencias de la Corte Suprema de Justicia continúan siendo fundamentales en la protección de los derechos de los ciudadanos en materia de pensiones y seguridad social, y su eficiencia en la resolución de casos como este contribuye a garantizar la experiencia positiva de los beneficiarios.

 </p>
 <br></br>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
