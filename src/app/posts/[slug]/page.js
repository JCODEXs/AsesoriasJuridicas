import Head from "next/head";
import { Fragment } from "react";
//import PostContent from '../../../../components/posts/post-detail/post-content';
import dynamic from "next/dynamic";
// const PostContent =dynamic(()=>import('../../../../components/posts/post-detail/post-content'), { ssr: false })
const PDFViewer = dynamic(
  () => import("../../../../components/posts/post-detail/post-content2"),
  { ssr: false }
);
import { getPostData, getPostsFiles } from "../../../../lib/posts-util";

function PostDetailPage({ params }) {
  // console.log(params);

  const postData = getPostData(params.slug);
  // console.log("post", postData);
  return (
    <Fragment>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.excerpt} />
      </Head>
      <PDFViewer post={postData} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames?.map((fileName) =>
    fileName.replace(/\.pdf$/, "")
  );

  return {
    paths: slugs?.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
