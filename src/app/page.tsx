import React from 'react';
import Head from 'next/head';
import './globals.css';
import Layout from '../../components/layout/layout';
import HomePage from "./index"

const Home: React.FC = () => {
  return (
    <> 
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="../../public/images/site/icono.png" />
      </Head>
    
      <HomePage/>
      {/* Render other components or content here */}
    </>
  );
};

export default Home;
