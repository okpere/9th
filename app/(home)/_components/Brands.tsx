'use client';

import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  'Retail and Wholesale',
  'Real Estate',
  'Logistics',
  'Professional Services',
  'Artisan Services',
];

export default function Brands() {
  return (
    <section className='bg-white py-20 px-6 md:px-20 flex flex-col items-center justify-center text-center min-h-screen '>
      {/* Top text section */}
      <div className='space-y-4 max-w-3xl'>
        <h2 className='text-5xl font-semibold text-gray-800'>
          Focusing on,{" "}
          <span className='text-gray-500'>Quality and Africa </span>
        </h2>
        <p className='text-gray-600 text-lg'>
          we maintain customer trust to be a facilitator of seamless real estate
          investmets in Africa and transform the African e-commerce.
        </p>
      </div>

      {/* Bottom circles */}
      <div className='grid grid-cols-2 md:grid-cols-5 gap-10 mt-16'>
        {brands.map((brand, index) => (
          <motion.div
            key={brand}
            className='w-40 h-40 md:w-48 md:h-48 rounded-full bg-gray-100 flex items-center justify-center shadow-lg hover:shadow-xl transition text-base font-medium text-center px-3'
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {brand}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
