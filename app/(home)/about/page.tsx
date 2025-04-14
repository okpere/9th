'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <section className='bg-white px-6 md:px-20 py-20 text-gray-800 mt-2.5'>
      <div className='max-w-5xl mx-auto text-center space-y-8'>
        {/* Title */}
        <div>
          <h1 className='text-4xl font-bold mb-4'>About Us</h1>
          <p className='text-gray-600 text-lg'>
            We're building technology that empowers businesses and individuals
            across industries to thrive.
          </p>
        </div>

        {/* Mission Section */}
        <div className='text-left space-y-4'>
          <h2 className='text-2xl font-semibold text-[#990017]'>Our Mission</h2>
          <p>
            At 9th Tech Limited, our mission is to create scalable solutions
            that solve real-world problems. From e-commerce and logistics to
            real estate and professional services, we connect people, platforms,
            and opportunities through innovation.
          </p>
        </div>

        {/* Vision Section */}
        <div className='text-left space-y-4'>
          <h2 className='text-2xl font-semibold text-[#990017]'>Our Vision</h2>
          <p>
            To become Africa's most trusted and impactful digital ecosystem,
            driving transformation across sectors with simplicity, security, and
            sustainability.
          </p>
        </div>

        {/* What We Do */}
        <div className='text-left space-y-4'>
          <h2 className='text-2xl font-semibold text-[#990017]'>What We Do</h2>
          <ul className='list-disc list-inside space-y-2 text-gray-700'>
            <li>Retail and Wholesale Marketplace</li>
            <li>Logistics and Supply Chain Solutions</li>
            <li>Real Estate Digital Services</li>
            <li>Professional and Artisan Service Platforms</li>
            <li>Custom Software and Platform Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
