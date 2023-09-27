import React, { ReactNode } from 'react';
import Head from 'next/head';
import './globals.css';
import Layout from '../../components/layout/layout';
import HomePage from "./index"


interface HomeProps {
  Component: ReactNode;
  pageProps: any; // Replace 'any' with the actual type of pageProps
}

const Home: React.FC<HomeProps> = ({ Component, pageProps }) => {
  return (
    <> 
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="../../public/images/site/icono.png" />
      </Head>
    
      <HomePage/>
      {pageProps}
    </>
   
  );
};

export default Home;
