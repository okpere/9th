import React from 'react';
import {
  Code2,
  PenTool,
  Landmark,
  BrainCog,
  ServerCog,
  ShieldAlert,
  Network,
  Layers,
  Bug,
  GraduationCap,
} from 'lucide-react';

const features = [
  {
    title: 'Custom Software Development',
    description:
      'Design, build, and maintain bespoke web, mobile, and desktop applications for businesses across sectors.',
    icon: <Code2 className='text-[#ff0000] w-6 h-6' />,
  },
  {
    title: 'Product Design & Engineering',
    description:
      'End-to-end product ideation, UI/UX design, prototyping, MVP development, and scaling of digital products.',
    icon: <PenTool className='text-[#ff0000] w-6 h-6' />,
  },
  {
    title: 'IT Consulting & Strategy',
    description:
      'Technology advisory, digital transformation, product-market fit guidance, and agile coaching for startups and enterprises.',
    icon: <Landmark className='text-[#ff0000] w-6 h-6' />,
  },
  {
    title: 'AI & Data Solutions',
    description:
      'Machine learning model development, data analytics, AI integration, and intelligent automation systems.',
    icon: <BrainCog className='text-[#ff0000] w-6 h-6' />,
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    description:
      'Deployment of scalable cloud systems (AWS, Azure, GCP), CI/CD pipelines, containerization (Docker, Kubernetes).',
    icon: <ServerCog className='text-[#ff0000] w-6 h-6' />,
  },
  {
    title: 'Cybersecurity Services',
    description:
      'Risk assessments, secure architecture reviews, penetration testing, and compliance audits (e.g., GDPR, ISO 27001).',
    icon: <ShieldAlert className='text-[#ff0000] w-6 h-6' />,
  },
  {
    title: 'Blockchain Development',
    description:
      'Decentralized apps (dApps), smart contracts, crypto wallet integration, and NFT solutions.',
    icon: <Network className='text-[#ff0000] w-6 h-6' />,
  },
  {
    title: 'SaaS Platform Development',
    description:
      'Full-stack development and hosting of SaaS products—from admin dashboards to subscription systems.',
    icon: <Layers className='text-[#ff0000] w-6 h-6' />,
  },
  {
    title: 'QA & Software Testing',
    description:
      'Manual and automated testing, performance benchmarking, usability testing, and release assurance.',
    icon: <Bug className='text-[#ff0000] w-6 h-6' />,
  },
  {
    title: 'Technical Training & Talent Incubation',
    description:
      'Specialized tech bootcamps, developer training, and partner company upskilling programs.',
    icon: <GraduationCap className='text-[#ff0000] w-6 h-6' />,
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
