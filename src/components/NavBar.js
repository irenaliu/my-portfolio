import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='bg-primary opacity-80 absolute inset-x-0 top-0'>
      <div className='container mx-auto'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            className='inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold sans-serif tracking-widest'
            activeClassName='text-white'
          >
            Irena
          </NavLink>
          <div className='ml-auto'>
            <NavLink
              to='/post'
              className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
              activeClassName='text-red-100 bg-red-700'
            >
              Blog Posts
            </NavLink>
            <NavLink
              to='/project'
              className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
              activeClassName='text-red-100 bg-red-700'
            >
              Projects
            </NavLink>
            <NavLink
              to='/about'
              className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
              activeClassName='text-red-100 bg-red-700'
            >
              About Me
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
