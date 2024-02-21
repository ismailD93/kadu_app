'use client';
import {FC} from 'react';
import Card from './Card';
import NextImage from 'next/image';
import Button from './Button';

const LandingPage: FC = () => {
  return (
    <div className='flex relative flex-col min-h-full justify-center mt-24'>
      <div className='mt-10 bg-blueberry py-10'>
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
      <div className='boxed'>
        <div className='w-full text-center font-medium text-48 mt-20'>
          Willkommen auf unserer Plattform, dem Ort, an dem Nutzer einfach und sicher Dinge an andere verleihen und
          ausleihen können.
        </div>
        <div className='flex justify-center mt-20'>
          <NextImage src={'/assets/sharing.png'} width={750} height={400} alt={'sharing'} />
        </div>
      </div>
      <div className='boxed py-10 bg-grey'>
        <div className='flex gap-4 md:flex-row gap-y-4 flex-col-reverse'>
          <div className='my-auto w-2/3 mx-auto text-center md:text-start flex flex-col'>
            <span className='text-22 font-medium'>Von Werkzeugen bis zu Büchern</span>
            <span className='text-22 font-medium'>Von Autos bis zu Klamotten</span>
          </div>
          <Card
            src='/assets/people.jpg'
            title='Tauschen'
            text='Du kannst deine Sachen mit anderen Nutzern unserer Platform tauschen'
          />
        </div>
        <div className='flex md:flex-row flex-col gap-y-4 mt-10'>
          <Card src='/assets/sharing.png' title='Leihen' text='Leihe dir die Sachen die du brauchst einfach aus!' />
          <div className='my-auto w-2/3 mx-auto text-center md:ml-10 md:text-start flex flex-col'>
            <span className='text-22 font-medium'>hier findet ihr,</span>
            <span className='text-22 font-medium'>was ihr braucht und könnt gleichzeitig Anderen helfen.</span>
          </div>
        </div>
      </div>
      <div className='max-w-[700px] text-center my-5 p-20 mx-auto rounded-md shadow-md'>
        <span className='text-36 font-medium'>
          Entdeckt die Möglichkeiten,spart Geld und unterstützt einen verantwortungsbewussten Konsum. Seid dabei und
          macht den Unterschied!
        </span>
        <Button label='Registrieren' buttonBig={true} className='mx-auto mt-10' />
      </div>
    </div>
  );
};

export default LandingPage;
