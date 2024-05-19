'use client';
import {FC} from 'react';
import Card from './Card';
import NextImage from 'next/image';
import Button from './Button';
import Header from './Header';

const LandingPage: FC = () => {
  return (
    <div className='flex relative flex-col min-h-full justify-center mt-24'>
      <Header />
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
      <div className='max-w-[700px] text-center my-5 p-20 mx-auto '>
        <span className='text-36 font-medium'>
          Entdeckt die Möglichkeiten,spart Geld und unterstützt einen verantwortungsbewussten Konsum. Seid dabei und
          macht den Unterschied!
        </span>
        <Button link='/register' label='Registrieren' buttonBig={true} className='mx-auto mt-10' />
      </div>
    </div>
  );
};

export default LandingPage;
