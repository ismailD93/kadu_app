import {FC} from 'react';
import NextImage from 'next/image';
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className='bg-blueberry py-10'>
      <div className='flex boxed md:flex-row flex-col'>
        <div className='flex justify-between w-full md:w-1/2'>
          <div className='flex flex-col text-white'>
            <span className='text-22 md:text-48 font-extrabold'>Leihe,</span>
            <span className='text-22 md:text-48 ml-3 font-extrabold'>Tausche</span>
            <span className='text-22 md:text-48 ml-20 font-extrabold'>Erlebe</span>
          </div>
          <div className='flex flex-col ml-5 text-white justify-end'>
            <span className='text-18 md:text-22'>Gemeinschaft erleben,</span>
            <span className='text-18 md:text-22'>Ressourcen schonen!</span>
          </div>
        </div>
        <div className='md:flex hidden relative w-full md:w-1/2 justify-center md:justify-end'>
          <div className='absolute top-0 left-20'>
            <NextImage src={'/assets/fahrzeug.png'} width={50} height={50} alt={'sharing'} />
          </div>
          <div className='absolute top-0 right-10'>
            <NextImage src={'/assets/naturRess.png'} width={50} height={50} alt={'sharing'} />
          </div>
          <div className='absolute bottom-10 left-52'>
            <NextImage src={'/assets/naturRess1.png'} width={50} height={50} alt={'sharing'} />
          </div>
          <div className='absolute bottom-0 right-0'>
            <NextImage src={'/assets/naturRess2.png'} width={50} height={50} alt={'sharing'} />
          </div>
          <div className='absolute bottom-5 right-36'>
            <NextImage src={'/assets/investieren.png'} width={50} height={50} alt={'sharing'} />
          </div>
          <div className='absolute top-3 right-48'>
            <NextImage src={'/assets/book.png'} width={50} height={50} alt={'sharing'} />
          </div>
          <div className='absolute bottom-0 left-14'>
            <NextImage src={'/assets/lend.png'} width={50} height={50} alt={'sharing'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
