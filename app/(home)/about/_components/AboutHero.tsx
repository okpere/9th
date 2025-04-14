'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  const [arrowClicked, setArrowClicked] = useState(false);

  const textLine1 = '9th Tech Limited';
  const textLine2 =
    'we believe in building solutions that empower individuals and businesses.';

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Background Image */}
      <motion.img
        src='/images/Frame 33757.svg'
        alt='Hero'
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='absolute top-0 left-0 w-full h-full object-cover'
      />

      {/* Text Overlay */}
      <div className='absolute inset-0 flex flex-col items-center justify-start pt-60 z-10'>
        {/* First Line: Fade In */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1, ease: 'easeOut' }}
          className='text-white text-4xl md:text-6xl font-bold drop-shadow-lg mb-3 text-center px-4'
        >
          {textLine1}
        </motion.h1>

        {/* Second Line: Match Style of First */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1, ease: 'easeOut' }}
          className='text-white text-xs md:text-xl font-bold drop-shadow-lg text-center px-4'
        >
          {textLine2}
        </motion.h1>
      </div>

      {/* Bouncing Arrow */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer'
        animate={
          arrowClicked
            ? { y: 0 }
            : {
                y: [0, -10, 0],
              }
        }
        transition={
          arrowClicked
            ? {}
            : {
                repeat: Infinity,
                duration: 1,
                ease: 'easeInOut',
              }
        }
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </motion.div>
    </div>
  );
}
