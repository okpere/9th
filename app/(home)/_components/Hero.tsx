'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Helper: Split the text into individual characters
const splitText = (text: string) =>
  text.split('').map((char, index) => ({
    char,
    key: `${char}-${index}`,
  }));

export default function Hero() {
  const [arrowClicked, setArrowClicked] = useState(false);

  const textLine1 = '9th Tech Limited';
  const textLine2 = 's t r a t e g i e s  .S y s t e m s  .S o l u t i o n s';
  const letters = splitText(textLine2);

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Background Image */}
      <motion.img
        src='/images/hero-image.png'
        alt='Hero'
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='absolute top-0 left-0 w-full h-full object-cover'
      />

      {/* Text Overlay */}
      <div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
        {/* First Line: Fade In */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1, ease: 'easeOut' }}
          className='text-white text-4xl md:text-6xl font-bold drop-shadow-lg mb-4'
        >
          {textLine1}
        </motion.h1>

        {/* Second Line: Typing Effect */}
        <motion.div
          className='text-white text-lg md:text-2xl font-medium tracking-wider flex flex-wrap justify-center'
          initial='hidden'
          animate='visible'
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 2.8,
              },
            },
          }}
        >
          {letters.map(({ char, key }) => (
            <motion.span
              key={key}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className='inline-block'
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Bouncing Arrow */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer'
        animate={
          arrowClicked
            ? { y: 0 } // stop animation
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
        onClick={() => setArrowClicked(true)}
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
