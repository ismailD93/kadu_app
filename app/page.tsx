import NextImage from 'next/image';

const Page = async () => {
  return (
    <div className='flex relative flex-col items-center min-h-full justify-center'>
      <div className='max-w-[600px] text-22 mt-10 text-center'>
        Willkommen auf unserer Plattform, dem Ort, an dem Nutzer einfach und sicher Dinge an andere verleihen und
        ausleihen können. Von Werkzeugen bis zu Büchern – hier findet ihr, was ihr braucht und könnt gleichzeitig
        Anderen helfen. Tretet unserer Gemeinschaft bei, teilt mehr und lebt nachhaltiger. Entdeckt die Möglichkeiten,
        spart Geld und unterstützt einen verantwortungsbewussten Konsum. Seid dabei und macht den Unterschied!
      </div>
      <div className='absolute top-14 left-0 -z-[1]'>
        <NextImage src={'assets/kaduLogoTransparent.svg'} alt={''} height={600} width={600} />
      </div>
    </div>
  );
};

const fetchData = async () => {};

export const revalidate = 0;

export default Page;
