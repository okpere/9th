import React from 'react';
import {
  Lightbulb,
  Store,
  TrendingUp,
  Trophy,
  ShieldCheck,
} from 'lucide-react';

const features = [
  {
    title: 'Innovation',
    description: 'Focus on creative solutions.',
    icon: <Lightbulb className='text-[#ff0000] w-6 h-6' />,
  },
  {
    title: 'Marketplace Management',
    description: 'Overseeing 9th marketplace operations.',
    icon: <Store className='text-[#ff0000] w-6 h-6' />,
  },
  {
    title: 'Growth and Development',
    description: 'Ensuring mutual growth with clients and employees.',
    icon: <TrendingUp className='text-[#ff0000] w-6 h-6' />,
  },
  {
    title: 'Market Competitiveness',
    description: 'Staying ahead in the tech market.',
    icon: <Trophy className='text-[#ff0000] w-6 h-6' />,
  },
  {
    title: 'Delivered safely',
    description:
      'Every unit we send arrives safely and quickly, without any obstacles or drama.',
    icon: <ShieldCheck className='text-[#ff0000] w-6 h-6' />,
  },
];

export default function QualityFeatures() {
  return (
    <section className='bg-gray-100 py-16 px-4 sm:px-6 md:px-20 min-h-screen flex flex-col items-center justify-center'>
      <div className='text-center mb-12 max-w-2xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-semibold text-gray-800'>
          We offer quality,{' '}
          <span className='text-gray-500'>comprehensive services</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>
        {features.map((feature) => (
          <div
            key={feature.title}
            className='flex flex-col items-center text-center gap-3 p-6 rounded-lg bg-white border border-gray-200 hover:shadow-md transition'
          >
            <div className='bg-gray-100 p-3 rounded-full shadow'>
              {feature.icon}
            </div>
            <h3 className='font-semibold text-lg text-gray-800'>
              {feature.title}
            </h3>
            <p className='text-sm text-gray-600'>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
