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
      // Replace with your API call to send email
      console.log('Sending email with data:', data);

      // Simulate success
      //   toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      //   toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#f5f5fb] p-4'>
      <Card className='w-full max-w-xl shadow-2xl rounded-2xl p-6 bg-white'>
        <CardContent>
          <h2 className='text-3xl font-bold mb-6 text-center text-[#1d1d1f]'>
            Contact Us
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            <div>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' {...register('name')} />
              {errors.name && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' {...register('email')} />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor='message'>Message</Label>
              <Textarea
                id='message'
                rows={5}
                {...register('message')}
                placeholder='Type your message here...'
              />
              {errors.message && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type='submit' className='w-full' disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
