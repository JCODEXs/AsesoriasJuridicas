import React, { ReactNode } from 'react';
import Head from 'next/head';
import './globals.css';
import Layout from '../../components/layout/layout';

interface HomeProps {
  Component: ReactNode;
  pageProps: any; // Replace 'any' with the actual type of pageProps
}

const Home: React.FC<HomeProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      {Component && React.isValidElement(Component) ? (
        React.cloneElement(Component, pageProps)
      ) : null}
    </Layout>
  );
};

export default Home;
