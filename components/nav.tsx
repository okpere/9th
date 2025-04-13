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
import { Logo } from './logo';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/blog' },
    { name: 'Products', href: '/products' },
  ];

  return (
    <NavigationMenu
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className='flex items-center justify-between px-6 py-4 md:px-8 md:py-6'>
        {/* <Logo /> */}

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-6 justify-between w-[85%] mx-auto'>
          <Logo />

          <NavigationMenuList className='flex gap-6'>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuTrigger
                  className={cn(
                    'bg-transparent text-base font-medium',
                    isScrolled ? 'text-[#ff0000]' : 'text-white',
                    'hover:text-[#ff0000]'
                  )}
                >
                  <Link href={item.href}>{item.name}</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            ))}

            {/* <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  'bg-transparent text-base font-medium',
                  isScrolled ? 'text-[#ff0000]' : 'text-white',
                  'hover:text-[#ff0000]'
                )}
              >
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className='bg-white p-4 shadow-lg rounded-md'>
                <NavigationMenuLink
                  href='/products/Marketplace'
                  className='block px-2 py-1 text-sm text-gray-800 hover:text-[#ff0000]'
                >
                  9th Market Place
                </NavigationMenuLink>
                <NavigationMenuLink
                  href='/products/fixtures'
                  className='block px-2 py-1 text-sm text-gray-800 hover:text-[#ff0000]'
                >
                  Fixtures
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
          </NavigationMenuList>

          <Button
            variant='outline'
            className={cn(
              'cursor-pointer',
              isScrolled
                ? 'text-[#ff0000] border-[#ff0000]'
                : 'text-black border-white'
            )}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className='md:hidden flex justify-between items-center w-full'>
          <Logo />

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X
                className={cn(
                  'w-6 h-6',
                  isScrolled ? 'text-[#ff0000]' : 'text-white'
                )}
              />
            ) : (
              <Menu
                className={cn(
                  'w-6 h-6',
                  isScrolled ? 'text-[#ff0000]' : 'text-white'
                )}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-white border-t border-gray-200 shadow-md px-6 py-4'>
          <nav className='flex flex-col gap-4'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-gray-800 font-medium hover:text-[#ff0000]'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className='mt-4'>
              <p className='text-sm text-gray-500 mb-2'>Products</p>
              <Link
                href='/products/Marketplace'
                className='block text-gray-800 hover:text-[#ff0000]'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                9th Market Place
              </Link>
              <Link
                href='/products/fixtures'
                className='block text-gray-800 hover:text-[#ff0000]'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fixtures
              </Link>
            </div>

            <Button
              variant='outline'
              className='mt-6 text-[#ff0000] border-[#ff0000]'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </NavigationMenu>
  );
}
