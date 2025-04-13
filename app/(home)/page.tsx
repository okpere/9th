import React from 'react';
import Hero from './_components/Hero';
import Brands from './_components/Brands';
import QualityFeatures from './_components/QualityFeatures';
export default function page() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <Brands />
      <QualityFeatures />
    </div>
  );
}
