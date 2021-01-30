import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer className='bg-primary opacity-80 absolute inset-x-0 bottom-0'>
      <div className='container mx-auto flex'>
        <div className='inline-flex py-3 px-3 my-6 text-gray-lightest'>
          &copy; {new Date().getFullYear()} Irena Liu
        </div>
        <div className='inline-flex py-3 px-3 my-6 ml-auto'>
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
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </footer>
  );
}
