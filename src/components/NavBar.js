import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header className='bg-primary opacity-80 absolute inset-x-0 top-0'>
      <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <NavLink
              to='/'
              exact
              className='inline-flex items-center mr-4 py-2 hover:text-white'
              activeClassName='text-secondary'
            >
              <img src={logo} alt='Website Logo' className='w-12' />
            </NavLink>
            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id='navbar'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <NavLink
                to='/'
                exact
                className='inline-flex items-center py-3 px-3 lg:my-6 rounded text-gray-lightest hover:text-white'
                activeClassName='text-secondary'
              >
                Home
              </NavLink>
              <NavLink
                to='/post'
                className='inline-flex items-center py-3 px-3 lg:my-6 rounded text-gray-lightest hover:text-white'
                activeClassName='text-secondary'
              >
                Blog Posts
              </NavLink>
              <NavLink
                to='/project'
                className='inline-flex items-center py-3 px-3 lg:my-6 rounded text-gray-lightest hover:text-white'
                activeClassName='text-secondary'
              >
                Projects
              </NavLink>
              <NavLink
                to='/about'
                className='inline-flex items-center py-3 px-3 lg:my-6 rounded text-gray-lightest hover:text-white'
                activeClassName='text-secondary'
              >
                About Me
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
