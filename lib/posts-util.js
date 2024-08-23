import fs from "fs";
import path from "path";

import matter from "gray-matter";

const pdfPostsDirectory = path.join(process.cwd(), "public/pdf");
const postsDirectory = path.join(process.cwd(), "posts");
// console.log(postsDirectory)

export function getPostsFiles() {
  // console.log("hiw");
  // return fs.readdirSync(pdfPostsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  // console.log(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  // console.log(postData);
  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);
  // console.log(postFiles)
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
