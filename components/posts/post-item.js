import Link from 'next/link';
import Image from 'next/image';

import classes from './post-item.module.css';

function PostItem(props) {
  const { title, image, excerpt, date, slug,content,name,type } = props.post;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString('es-US', options);
  console.log(props)

  const imagePath = `/images/posts/68944/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
      
          <div className={classes.image}>
            <div style={{ fontSize:"1.5rem",fontWeight:600,margin:"0.5rem" }} >{type}</div>
            <Image
              src={imagePath}
              alt={title}
              width={120}
              height={150}
              layout='responsive'
            />
          </div>
          <div className={classes.content}>
            <div style={{ fontSize:"1.5rem",fontWeight:600,margin:"0.5rem" }}>{title}</div>
            <div style={{ fontSize:"1.5rem",fontWeight:400, }}>{name}</div>
            <p>{content}</p>
            {/* <time>{formattedDate}</time>
            <p>{excerpt}</p> */}
          </div>
       
      </Link>
    </li>
  );
}

export default PostItem;
