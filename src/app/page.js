import React from 'react';
import Head from 'next/head';
import './globals.css';
import HomePage from "./index"

const Home = () => {
  return (
    <> 
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="images/site/icono.png" />
      </Head>
    
      <HomePage/>
      {/* Render other components or content here */}
    </>
  );
};

export default Home;
