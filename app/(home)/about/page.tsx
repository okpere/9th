import React from 'react';
import AboutHero from './_components/AboutHero';
import Content from './_components/content';

const page = () => {
  return (
    <div className='flex flex-col'>
      <AboutHero />
      <Content />
    </div>
  );
};

export default page;
