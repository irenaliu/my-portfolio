import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <header className='bg-primary opacity-80 absolute inset-x-0 top-0'>
      <div className='container mx-auto'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            className='inline-flex items-center py-6 px-3 mr-4 text-gray-lightest hover:text-white text-4xl font-bold sans-serif tracking-widest'
            activeClassName='text-secondary'
          >
            <img src={logo} alt='Website Logo' className='w-12' />
          </NavLink>
          <div className='ml-auto'>
            <NavLink
              to='/'
              exact
              className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-lightest hover:text-white'
              activeClassName='text-secondary'
            >
              Home
            </NavLink>
            <NavLink
              to='/post'
              className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-lightest hover:text-white'
              activeClassName='text-secondary'
            >
              Blog Posts
            </NavLink>
            <NavLink
              to='/project'
              className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-lightest hover:text-white'
              activeClassName='text-secondary'
            >
              Projects
            </NavLink>
            <NavLink
              to='/about'
              className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-lightest hover:text-white'
              activeClassName='text-secondary'
            >
              About Me
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
