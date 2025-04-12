import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white px-6 py-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Logo & Contact */}
        <div>
          <div className='mb-4'>
            <Image
              src='/logo.png'
              alt='9th Tech Logo'
              width={150}
              height={50}
            />
          </div>
          <p className='text-sm'>Phone: 0700044499</p>
          <p className='text-sm'>Email: support@9th.ng</p>
        </div>

        {/* Address */}
        <div>
          <h3 className='text-lg font-semibold mb-2'>Our Office</h3>
          <p className='text-sm'>
            Suite 304A, Bahamas Plaza, <br />
            1080 Joseph Gomwalk Street, <br />
            Gudu, Abuja, Nigeria.
          </p>
        </div>

        {/* Socials */}
        <div>
          <h3 className='text-lg font-semibold mb-2'>Follow Us</h3>
          <div className='flex gap-4'>
            <a href='#' aria-label='Facebook' className='hover:text-gray-300'>
              <FaFacebookF />
            </a>
            <a href='#' aria-label='Twitter' className='hover:text-gray-300'>
              <FaTwitter />
            </a>
            <a href='#' aria-label='Instagram' className='hover:text-gray-300'>
              <FaInstagram />
            </a>
            <a href='#' aria-label='LinkedIn' className='hover:text-gray-300'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className='mt-10 text-center text-sm text-gray-400'>
        &copy; {new Date().getFullYear()} 9th Tech Limited. All rights reserved.
      </div>
    </footer>
  );
}
