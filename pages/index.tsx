import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import GetStartedLayer from '../components/GetStartedLayer';
import AdvancedStatsLayer from '../components/AdvancedStatsLayer';
import BoostLayer from '../components/BoostLayer';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Shortly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-col flex">
        <GetStartedLayer />
        <AdvancedStatsLayer />
        <BoostLayer />
      </main>
      <Footer />
    </div>
  );
}
