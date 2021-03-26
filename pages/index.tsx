import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Landing() {
  return (
    <div>
      <Head>
        <title>Hello Finn Auto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <main>
        <h1 className="text-6xl font-poppins font-bold">
          Hello Finn
        </h1>
      </main> */}

    </div>
  );
}
