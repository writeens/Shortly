import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello Finn Auto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl font-poppins font-bold">
          Hello Finn
        </h1>
      </main>

    </div>
  );
}
