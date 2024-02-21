import {ReactNode} from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default async function PageLayout({children}: {children: ReactNode}) {
  return (
    <div className='h-screen my-auto'>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
