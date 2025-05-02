'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Retail and Wholesale',
    image: '/images/at.svg',
    description:
      'Access a broad range of wholesale products for retail businesses. Get the best prices and bulk purchasing options.',
  },
  {
    id: 2,
    name: 'Real Estate',
    image: '/images/es.svg',
    description:
      'Explore real estate opportunities for both buyers and sellers. Find your dream property or the perfect investment.',
  },
  {
    id: 3,
    name: 'Logistics',
    image: '/images/lg.svg',
    description:
      'Manage and streamline your logistics operations with our efficient solutions. From warehousing to delivery.',
  },
  {
    id: 4,
    name: 'Professional Services',
    image: '/images/pro.svg',
    description:
      'Find a variety of professional services ranging from legal, accounting, and marketing to consultancy and more.',
  },
  {
    id: 5,
    name: 'Artisan Services',
    image: '/images/atis.svg',
    description:
      'Support local artisans and discover unique, handmade products and services crafted with passion and skill.',
  },
];

export default function ProductPage() {
  return (
    <div className='min-h-screen px-4 py-16 bg-[#f5f5fb]'>
      {/* Write-up section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='max-w-3xl mx-auto text-center mb-16'
      >
        <h1 className='text-4xl font-extrabold text-[#1d1d1f] mb-4'>
          Explore Our Services
        </h1>
        <p className='text-lg text-gray-700 leading-relaxed'>
          Discover our diverse range of services that cater to various
          industries. Whether you are a business owner or an individual, we have
          something tailored just for you.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className='bg-white rounded-2xl shadow-lg overflow-hidden'
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-60 object-cover'
              />
            ) : (
              <div className='w-full h-60 bg-gray-300'></div>
            )}
            <div className='p-5'>
              <h3 className='text-xl font-bold text-[#1d1d1f] mb-2'>
                {product.name}
              </h3>
              <p className='text-gray-600 text-sm mb-4'>
                {product.description}
              </p>
              <Link href={'https://www.9th.africa/marketplace'}>
                <Button
                  variant='outline'
                  className='border-[#FF0000] text-[#ff0000] py-2 px-4'
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
