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
      <Link  href={linkPath} passHref legacyBehavior>
      <a >
        
            <div className={classes.image} >
              <div style={{ fontSize:"1.5rem",fontWeight:600,margin:"0.5rem",position:"relative",zIndex: -1 }} >{type}</div>
              <div style={{position:"relative", zIndex: -1}} >
          
            <Image
        src={imagePath}
        alt={title}
        width={120}
        height={150}
        layout='responsive'
        style={{position:"relative", zIndex: -100}}
            />
            <div style={{
            position:"absolute",
            top:"17%",
            left:"16%",
            transform:"translate(-50%, -50%) rotate(-25deg)",
            color:"rgba(255, 255, 255, 0.7)",
            background:"rgba(165, 0, 10, 0.75)",
            padding:"0.25rem",
            fontSize:"1.5rem",
            paddingLeft: "1.1rem", // Agregado de relleno izquierdo
            paddingRight: "0.8rem",
            borderRadius:"5px",
            zIndex: -99,
          }}>
            PDF
          </div>
        </div>
        
          </div>
            <div className={classes.content}>
              <div style={{ fontSize:"1.5rem",fontWeight:600,margin:"0.5rem" }}>{title}</div>
              <div style={{ fontSize:"1.5rem",fontWeight:400, }}>{name}</div>
              <p>{content}</p>
              {/* <time>{formattedDate}</time>
              <p>{excerpt}</p> */}
            </div>
        
      </a>
      </Link>
    </li>
  );
}

export default PostItem;
