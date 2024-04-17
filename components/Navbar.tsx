'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';
import Button from '@/components/Button';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuToggleHandler = (event: React.MouseEvent) => {
    setToggleMenu((prevValue) => !prevValue);
  };

  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image
          src='/hilink-logo.svg'
          alt='CoTour Logo'
          width={74}
          height={29}
        />
      </Link>

      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map(({ href, key, label }, index) => (
          <Link
            key={key}
            href={href}
            className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50'
          >
            {label}
          </Link>
        ))}
      </ul>

      <div className='lg:flexCenter hidden'>
        <Button
          type='button'
          title='Log in'
          icon='/user.svg'
          variant='btn_dark_green'
        />
      </div>

      <Image
        src='/menu.svg'
        alt='menu'
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
        onClick={menuToggleHandler}
      />

      {toggleMenu && (
        <div className='hidden absolute z-10 right-6 top-5 max-lg:flex flex-row items-start gap-3 py-3 px-5 bg-white shadow-md transition-all'>
          <div className='flex-1 flex flex-col gap-2'>
            {NAV_LINKS.map(({ href, key, label }) => (
              <Link
                key={key}
                href={href}
                className='regular-14 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50 flex justify-start'
                onClick={menuToggleHandler}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className=''>
            <Image
              src='/close.svg'
              alt='close menu'
              width={24}
              height={24}
              className='invert'
              onClick={menuToggleHandler}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
