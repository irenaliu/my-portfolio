import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer className='bg-primary opacity-80 absolute inset-x-0 bottom-0'>
      <div className='relative flex px-2 py-3'>
        <div className='container mx-auto flex-column md:flex md:flex-row-reverse md:justify-between px-2 py-3'>
          <div className='flex justify-center pb-2 md:pb-0'>
            <SocialIcon
              url='https://www.linkedin.com/in/irenaliu/'
              className='mr-4'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url='https://github.com/irenaliu'
              className='mr-4'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url='https://twitter.com/irenaliu'
              className='mr-4'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url='https://www.instagram.com/rnaliu/'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div className='flex md:inline-flex justify-center text-gray-lightest'>
            &copy; {new Date().getFullYear()} Irena Liu
          </div>
        </div>
      </div>
    </footer>
  );
}
