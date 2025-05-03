import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { Logo } from './logo';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='bg-[#990017] text-white px-6 py-12 '>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12'>
        {/* Logo & Contact */}
        <div>
          <div className='mb-0.5'>
            <Logo />
          </div>
          <p className='text-sm'>Phone: 0700044499</p>
          <p className='text-sm'>Email: support@9th.ng</p>
        </div>

        {/* Products */}
        <div>
          <h3 className='text-lg font-semibold mb-2'>Products</h3>
          <ul className='space-y-1'>
            <li>
              <a href='/products' className='text-sm hover:text-gray-300'>
                9th Market Place
              </a>
            </li>
            <li>
              <a href='/products' className='text-sm hover:text-gray-300'>
                Retail and Wholesale
              </a>
            </li>
            <li>
              <a href='/products' className='text-sm hover:text-gray-300'>
                Real Estate
              </a>
            </li>
            <li>
              <a href='/products/' className='text-sm hover:text-gray-300'>
                Professional Services
              </a>
            </li>
            <li>
              <a href='/products' className='text-sm hover:text-gray-300'>
                Logistics
              </a>
            </li>
            <li>
              <a href='/products' className='text-sm hover:text-gray-300'>
                Artisan Services
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className='text-lg font-semibold mb-2'>Office Locations</h3>
          <p className='text-sm'>
            24b Nza street, Independence Layout, Enugu,Enugu-North LGA, Enugu
          </p>
          <br />
          <p className='text-sm'>
            Suite 304A, Bahamas Plaza, 1080 Joseph Gomwalk Street, <br />
            Gudu, Abuja, Nigeria.
          </p>
        </div>
        {/* Legal */}
        <div>
          <h3 className='text-lg font-semibold mb-2'>Legal</h3>
          <ul className='space-y-1'>
            <li>
              <a href='/' className='text-sm hover:text-gray-300'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/' className='text-sm hover:text-gray-300'>
                Terms of Service
              </a>
            </li>
            <li>
              <a href='/' className='text-sm hover:text-gray-300'>
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className='text-lg font-semibold mb-2'>Follow Us</h3>
          <div className='flex gap-4'>
            <Link
              href='https://x.com/9thmarketplace'
              aria-label='Twitter'
              className='hover:text-gray-300'
            >
              <FaTwitter />
            </Link>
            <a
              href='https://www.instagram.com/9thmarketplace'
              aria-label='Instagram'
              className='hover:text-gray-300'
            >
              <FaInstagram />
            </a>
            <a
              href='https://www.linkedin.com/company/9thmarketplace/'
              aria-label='LinkedIn'
              className='hover:text-gray-300'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className='mt-10 text-center text-sm text-gray-400'>
        &copy; {new Date().getFullYear()} 9th Tech Limited. All rights reserved.
      </div>
    </div>
  );
}
