import {FC} from 'react';
import Dashboard from '../../components/Dashboard';
import {auth} from '../../auth';
import {SessionProvider} from 'next-auth/react';
import {redirect} from 'next/navigation';

const Page: FC<{searchParams?: {userId?: string}}> = async ({searchParams}) => {
  const userId = searchParams?.userId;
  const session = await auth();

  if (!session) redirect('/login');

  return (
    <SessionProvider basePath={'/api/auth'} session={session}>
      <div className='w-full'>
        <Dashboard userName={session.user?.name || ''} userId={userId} />
      </div>
    </SessionProvider>
  );
};

const fetchData = async () => {};

export const revalidate = 0;

export default Page;
