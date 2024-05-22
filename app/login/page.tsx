import {auth} from '@/auth';
import Login from '@/components/Login';
import {redirect} from 'next/navigation';

const Page = async () => {
  return (
    <div className='flex items-center min-h-full justify-center'>
      <Login userLoggedIn />
    </div>
  );
};

const fetchData = async () => {};

export const revalidate = 0;

export default Page;
