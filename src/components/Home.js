import React from 'react';
import background from '../assets/background.jpg';
export default function Home() {
  return (
    <main>
      <img
        src={background}
        alt='Trees and river'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-52 md:pt-72 px-8'>
        <h1 className='text-7xl lg:text-9xl text-green-100 font-bold sans-serif leading-none lg:leading-snug'>
          Hello! I'm Irena.
        </h1>
      </section>
    </main>
  );
}
