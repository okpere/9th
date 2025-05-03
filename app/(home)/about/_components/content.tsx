'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-[#f5f5fb] text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-[#770000] mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          At <strong>9th Tech</strong>, we're your global online destination for construction materials and fixtures. We collaborate with diverse stakeholders to streamline your building experience, offering everything from procurement to occupancy and maintenance.
        </motion.p>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We are committed to promoting sustainable homes and properties, supporting your vision from the ground up. With a global reach and local expertise, our network ensures fast and reliable logistics to any destination.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-[#770000] mb-4">Who We Are</h3>
          <p className="text-lg mb-6">
            9th Tech is an innovative organization revolutionizing Africa’s tech space. We manage the 9th Marketplace — a platform that empowers buying, selling, and hiring across the continent.
          </p>
          <p className="text-lg mb-6">
            Our mission is to empower Africa’s growth by driving secure, convenient e-commerce, real estate, and construction trade solutions.
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-[#770000] mb-4">Our Core Values</h3>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Integrity</li>
            <li>Trust</li>
            <li>Accountability</li>
            <li>Sustainability</li>
            <li>Inclusion</li>
          </ul>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <h3 className="text-2xl font-semibold text-[#770000] mb-4">What We Offer</h3>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Construction materials (retail & wholesale)</li>
            <li>Professional services: architects, engineers, interior designers</li>
            <li>Artisan services: masons, electricians, plumbers, tilers</li>
            <li>Real estate: finished houses, plots, rentals</li>
            <li>Manufacturer & global supplier connections</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
