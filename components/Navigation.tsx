'use client';

import {FC, useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import BurgerMenuIcon from '../icons/BurgerMenuIcon';

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({className}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      setIsVisible((currentScrollPos < 100 || !isScrollingDown) && currentScrollPos >= 0);

      setPrevScrollPos(currentScrollPos);
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollPosition <= 100 && isScrolled) {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled, prevScrollPos]);

  return (
    <>
      <div className='boxed-layout fixed inset-x-0 z-10 bg-indigo-ink'>
        <div
          className={classNames('flex w-full justify-between ease-out', {
            'h-[0px] opacity-0 duration-500': !isVisible,
            'h-16 duration-500 md:h-[84px]': isVisible,
          })}>
          <div className='my-auto flex'>
            KADU
            <div className='ml-10 hidden gap-x-[30px] text-15 md:flex'></div>
          </div>
          <div className='hidden items-center md:flex'></div>
          <div onClick={() => setShowMenu(true)} className='flex cursor-pointer items-center pl-3 md:hidden'>
            <BurgerMenuIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
