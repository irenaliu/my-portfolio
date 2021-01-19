import React from 'react';
import image from '../background.jpg';
export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='Trees and river'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-green-100 font-bold sans-serif leading-none lg:leading-snug home-name'>
          Hello! I'm Irena.
        </h1>
      </section>
    </main>
  );
}
