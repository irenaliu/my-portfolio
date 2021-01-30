import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer>
      <div></div>
      <div className='inline-flex py-3 px-3 my-6'>
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
    </footer>
  );
}
