import {FC} from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
const Footer: FC = () => {
  const linkArr = [
    {link: '/impressum', label: 'Impressum'},
    {link: '/datenschutz', label: 'Datenschutz'},
    {link: '/agb', label: 'AGB'},
  ];

  return (
    <div className='py-10 px-10 bg-indigo-ink'>
      <div className='boxed-layout flex gap-y-4 flex-col md:flex-row'>
        <div className='flex w-full md:w-1/2 justify-center md:border-r border-white'>
          <NextImage src={'assets/kaduLogoHell.svg'} alt={''} height={100} width={100} />
          <div className='md:flex items-center ml-1.5 text-white font-medium italic text-48 hidden'>ADU</div>
        </div>
        <div className='flex text-white flex-col gap-x-5 w-full md:w-1/2 justify-end'>
          <div className='flex justify-center gap-x-10'>
            <Link href={'/ueber-uns'} className='text-22 cursor-pointer'>
              Über uns
            </Link>
          </div>
          <div className='mt-14 flex flex-wrap font-light justify-center gap-x-3 text-10 text-white md:mt-10'>
            {linkArr.map((item, index) => {
              return (
                <div key={index} className='flex cursor-pointer'>
                  <Link href={item.link}>{item.label}</Link>
                  {index < linkArr.length - 1 && <div className='ml-3 border-[0.5px] border-t' />}
                </div>
              );
            })}
            <span className='mt-4 text-grey sm:mt-0 text-10 font-light md:ml-[30px]'>
              Powered by Ismail and Metehan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
