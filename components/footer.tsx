import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { Logo } from './logo';

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
              <a
                href='/products/Marketplace'
                className='text-sm hover:text-gray-300'
              >
                9th Market Place
              </a>
            </li>
            <li>
              <a
                href='/products/retail'
                className='text-sm hover:text-gray-300'
              >
                Retail and Wholesale
              </a>
            </li>
            <li>
              <a
                href='/products/real-estate'
                className='text-sm hover:text-gray-300'
              >
                Real Estate
              </a>
            </li>
            <li>
              <a
                href='/products/professional-services'
                className='text-sm hover:text-gray-300'
              >
                Professional Services
              </a>
            </li>
            <li>
              <a
                href='/products/logistics'
                className='text-sm hover:text-gray-300'
              >
                Logistics
              </a>
            </li>
            <li>
              <a
                href='/products/artisan-services'
                className='text-sm hover:text-gray-300'
              >
                Artisan Services
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className='text-lg font-semibold mb-2'>Our Office</h3>
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
              <a
                href='/legal/privacy-policy'
                className='text-sm hover:text-gray-300'
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/legal/terms' className='text-sm hover:text-gray-300'>
                Terms of Service
              </a>
            </li>
            <li>
              <a href='/legal/cookies' className='text-sm hover:text-gray-300'>
                Cookie Policy
              </a>
            </li>
          </ul>
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
    </div>
  );
}
