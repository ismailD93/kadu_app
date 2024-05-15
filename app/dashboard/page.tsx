import {FC} from 'react';
import Dashboard from '../../components/Dashboard';
import {auth} from '../../auth';
import {SessionProvider} from 'next-auth/react';
import {BASE_PATH} from '../../auth.config';

const Page: FC<{searchParams?: {userId?: string}}> = async ({searchParams}) => {
  const userId = searchParams?.userId;
  const session = await auth();
  console.log(session);
  return (
    <SessionProvider basePath={BASE_PATH} session={session}>
      <div className='w-full'>
        <Dashboard userId={userId} />
      </div>
    </SessionProvider>
  );
};

const fetchData = async () => {};

export const revalidate = 0;

export default Page;
