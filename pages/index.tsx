import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import GetStartedLayer from '../components/GetStartedLayer';
import AdvancedStatsLayer from '../components/AdvancedStatsLayer';
import BoostLayer from '../components/BoostLayer';

export default function Landing() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Hello Finn Auto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <GetStartedLayer />
      <AdvancedStatsLayer />
      <BoostLayer />
    </div>
  );
}
