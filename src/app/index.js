import { Fragment } from "react";
import Head from "next/head";

import FeaturedPosts from "../../components/homePage/featuredPost";
import Hero from "../../components/homePage/hero";
import { getFeaturedPosts } from "../../lib/posts-util";
import ContactForm from "../../components/contact/contact-form";
import EspecialInfo from "../../components/homePage/specialInfo";

function HomePage(props) {
  const featuredPosts = getFeaturedPosts();

  return (
    <Fragment style={{ background: "rgb(10,10,15,0.5)" }}>
      <Head>
        <title>Pensiones Colombianos</title>
        <meta name="description" content="Ai to the service of humanity." />
      </Head>
      <Hero />
      <EspecialInfo />
      <FeaturedPosts posts={featuredPosts} />
      <ContactForm showImage={false} />
    </Fragment>
  );
}

export default HomePage;
