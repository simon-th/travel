import React from 'react';
import Head from 'next/head';
import Map from '../components/map';

function Home() {
  return (
    <div>
      <Head>
        <title>Travel with Simon</title>
      </Head>
      <div className='text-neutral-700 flex flex-col fixed top-0 z-10 w-fit h-fit p-4 border-t-0'>
        <h1 className='text-2xl tracking-tight font-bold'>Travel with Simon</h1>
        <p>Zoom in on the markers to explore places I&apos;ve been</p>
      </div>
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <Map />
      </div>
    </div>
  );
}

export default Home;
