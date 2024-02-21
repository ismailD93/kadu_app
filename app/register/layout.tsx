import {ReactNode} from 'react';
import Footer from '../../components/Footer';

export default async function PageLayout({children}: {children: ReactNode}) {
  return (
    <div className='h-screen my-auto'>
      {children} <Footer />
    </div>
  );
}
