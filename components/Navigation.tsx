'use client';

import {FC, useEffect, useState} from 'react';
import NextImage from 'next/image';
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
      <div className='fixed inset-x-0 z-10 bg-indigo-ink'>
        <div
          className={classNames('flex w-full boxed-layout transition-all justify-between ease-out', {
            'h-[0px] opacity-0 duration-500': !isVisible,
            'h-16 duration-500 md:h-[84px]': isVisible,
          })}>
          <div
            className={classNames('my-auto transition-all flex', {
              'opacity-0 duration-100': !isVisible,
              'duration-1000': isVisible,
            })}>
            <NextImage src={'assets/kaduLogoTransparent.svg'} alt={''} height={70} width={70} />
            <div className='flex items-center ml-1.5 text-white font-medium italic text-22'>ADU</div>
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
