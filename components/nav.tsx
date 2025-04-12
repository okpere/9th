'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import { Logo } from './logo';
import { Button } from './ui/button';

export function Navigation() {
    return (
      <NavigationMenu
        className='
          fixed top-0 left-0 w-full z-50 
          bg-transparent  
          flex items-center justify-between px-6 py-4
        '
      >
        <Logo />
        <NavigationMenuList className='flex justify-between gap-6'>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-white hover:text-white'>
              <Link href='/'>Home</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-white hover:text-white'>
              <Link href='/about'>About</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-white hover:text-white'>
              <Link href='/contact'>Contact Us</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-white hover:text-white'>
              Products
              <NavigationMenuContent>
                <NavigationMenuLink href='/products/Marketplace'>
                  9th Market Place
                </NavigationMenuLink>
                <NavigationMenuLink href='/products/fixtures'></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-white hover:text-white'>
              <Link href='/blog'>FAQ</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
        <Button variant='outline' className='text-white border-white hover:bg-white hover:text-black'>
          Get Started
        </Button>
      </NavigationMenu>
    );
  }
  
