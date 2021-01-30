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
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-72 px-8'>
        <h1 className='text-6xl text-green-100 font-bold sans-serif leading-none lg:leading-snug home-name'>
          Hello! I'm Irena.
        </h1>
      </section>
    </main>
  );
}
