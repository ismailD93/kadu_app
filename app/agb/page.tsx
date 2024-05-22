import Agb from '@/components/Agb';
import Footer from '@/components/Footer';

const Page = async () => {
  return (
    <div className='flex-1 flex flex-col'>
      <div className='flex flex-col gap-y-5 flex-1 mb-10 boxed'>
        <div className='mx-auto text-36 my-10'>Allgemeine Geschäftsbedingungen</div>
        <Agb />
      </div>
      <Footer />
    </div>
  );
};

const fetchData = async () => {};

export const revalidate = 0;

export default Page;
