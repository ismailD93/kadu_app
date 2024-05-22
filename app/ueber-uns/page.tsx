import Footer from '@/components/Footer';
import Team from '@/components/Team';
import NextImage from 'next/image';

const Page = async () => {
  return (
    <div className='flex-1 flex flex-col'>
      <div className='flex flex-col gap-y-5 flex-1 mb-10 boxed'>
        <Team
          items={[
            {id: '1', jobTitle: 'Backend-Entwickler', name: 'Metehan Kavi', imageSrc: '/assets/meto.jpg'},
            {id: '2', jobTitle: 'Frontend-Entwickler', name: 'Ismail Duman', imageSrc: '/assets/iso.jpg'},
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

const fetchData = async () => {};

export const revalidate = 0;

export default Page;
