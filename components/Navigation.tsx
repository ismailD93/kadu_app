'use client';

import {FC, useEffect, useState} from 'react';
import NextImage from 'next/image';
import classNames from 'classnames';
import BurgerMenuIcon from '../icons/BurgerMenuIcon';
import Button from './Button';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import Link from 'next/link';
import Modal from './Modal';

interface NavigationProps {
  className?: string;
  dashboard?: boolean;
}

const Navigation: FC<NavigationProps> = ({className, dashboard}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const hideNav = pathname === '/login' || pathname === '/register';

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
      <div className={classNames('fixed inset-x-0 z-10 bg-white', {hidden: hideNav})}>
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
            <NextImage src={'assets/kaduLogo.svg'} alt={''} height={50} width={50} />
            <div className='flex items-center ml-1.5 text-indigo-ink font-medium italic text-22'>ADU</div>
            {dashboard ? (
              <div className='my-auto ml-10 hidden md:flex gap-x-4'>
                <Link href={''}> Durchsuchen </Link>
                <Link href={''}> Profil </Link>
              </div>
            ) : (
              <div className='my-auto ml-10 hidden md:flex gap-x-4'>
                <Link href='/ueber-uns' className='text-18 font-medium'>
                  Über uns
                </Link>
              </div>
            )}
          </div>
          {dashboard ? (
            <div className='my-auto'>
              <Link className='text-18' href={''}>
                Ausloggen
              </Link>
            </div>
          ) : (
            <div className='hidden md:flex my-auto gap-x-5 justify-end'>
              <Button link='login' variant='outline' label='Login' />
              <Button link='register' label='Registrieren' />
            </div>
          )}
          <div onClick={() => setShowMenu(true)} className='flex cursor-pointer items-center pl-3 md:hidden'>
            <BurgerMenuIcon />
          </div>
        </div>
        <Modal title='Menu' onClose={() => setShowMenu(false)} open={showMenu}>
          <div className='mt-20 mx-auto gap-y-10 text-center flex flex-col gap-x-4'>
            <Link href='/' className='text-36 font-medium'>
              Über uns
            </Link>
            <Link href='/' className='text-36 font-medium'>
              Kontakt
            </Link>
            <div className='flex flex-col my-auto gap-y-10 items-center'>
              <Button link='login' variant='outline' label='Login' />
              <Button link='register' label='Registrieren' />
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Navigation;
