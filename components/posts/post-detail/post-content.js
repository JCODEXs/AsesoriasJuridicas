"use client";
import ReactMarkdown from "react-markdown";
import { Document, Page, pdfjs } from "react-pdf";
import Image from "next/image";
// import { PrismLight } from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
// import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
// import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import dynamic from "next/dynamic";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
// const FileViewer = dynamic(() => import('react-file-viewer'), { ssr: false });

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

//SyntaxHighlighter.registerLanguage('js', js);
// SyntaxHighlighter.registerLanguage('css', css);

function PostContent(props) {
  const { post } = props;
  const pdfPath = `/pdf/${post.slug}.pdf`;
  // console.log(pdfPath)
  const pdfUrl = `/pdf/${post.slug}.pdf`;
  return (
    <article className={classes.content}>
      <iframe src={pdfUrl} />
    </article>
  );
}

// function PostContent(props) {
//   const { post } = props;
//   console.log(post)

//   const imagePath = `/images/posts/${post.slug}/${post.image}`;

//   const customRenderers = {
//     // image(image) {
//     //   return (
//     //     <Image
//     //       src={`/images/posts/${post.slug}/${image.src}`}
//     //       alt={image.alt}
//     //       width={600}
//     //       height={300}
//     //     />
//     //   );
//     // },
//     paragraph(paragraph) {
//       const { node } = paragraph;

//       if (node.children[0].type === 'image') {
//         const image = node.children[0];
//         console.log(image)

//         return (
//           <div className={classes.image}>
//             <Image
//               src={`/images/posts/${post.slug}/${image.url}`}
//               alt={image.alt}
//               width={600}
//               height={300}
//             />
//           </div>
//         );
//       }

//       return <p>{paragraph.children}</p>;
//     },

//     // code(code) {
//     //   const { language, value } = code;
//     //   return (

//     //     <SyntaxHighlighter
//     //      style={docco}
//     //      language="javascript"
//     //       children={value}
//     //     />
//     //   );
//     // },
//   };

//   return (
//     <article className={classes.content}>
//       <PostHeader title={post.title} image={imagePath} />
//       <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>

//     </article>
//   );

export default PostContent;
