import {ReactNode} from 'react';

export default async function PageLayout({children}: {children: ReactNode}) {
  return (
    <div className='h-screen my-auto flex flex-col'>
      <div className='flex flex-1 bg-light-grey'>{children}</div>
    </div>
  );
}
