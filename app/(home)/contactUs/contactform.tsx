'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log('Sending email with data:', data);
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className=' min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 bg-[#f5f5fb] px-4 py-12'>
      {/* Animated Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='max-w-md text-center lg:text-left'
      >
        <h2 className='text-4xl font-extrabold text-[#1d1d1f] mb-4'>
          Contact Us
        </h2>
        <p className='text-lg text-gray-700 leading-relaxed'>
          <span className='font-medium text-[#FF0000]'>Connecting with us</span>{' '}
          means more than just filling out a form — it’s a step toward something
          greater. Whether you’re reaching out for support, collaboration, or
          opportunity, we believe every conversation can spark{' '}
          <span className='italic font-semibold'>positive change</span> that
          reaches far beyond today.
        </p>
      </motion.div>

      {/* Animated Form Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className='w-full max-w-xl'
      >
        <Card className='rounded-2xl p-6 bg-white shadow-xl'>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
              <div>
                <Label
                  className='mb-1 text-sm font-medium text-gray-800'
                  htmlFor='name'
                >
                  Name
                </Label>
                <Input id='name' {...register('name')} />
                {errors.name && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label
                  className='mb-1 text-sm font-medium text-gray-800'
                  htmlFor='email'
                >
                  Email
                </Label>
                <Input id='email' type='email' {...register('email')} />
                {errors.email && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label
                  className='mb-1 text-sm font-medium text-gray-800'
                  htmlFor='message'
                >
                  Message
                </Label>
                <Textarea
                  className='h-44'
                  id='message'
                  rows={20}
                  {...register('message')}
                  placeholder='Type your message here...'
                />
                {errors.message && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                variant='outline'
                type='submit'
                className='w-full border-[#ff0000] text-[#ff0000] hover:bg-[#ff0000] hover:text-white transition'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
