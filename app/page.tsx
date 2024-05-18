import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import Navigation from '../components/Navigation';

const Page = async () => {
  return (
    <>
      <div className='h-screen my-auto'>
        <Navigation />
        <LandingPage />
        <Footer />
      </div>
    </>
  );
};

const fetchData = async () => {};

export const revalidate = 0;

export default Page;
