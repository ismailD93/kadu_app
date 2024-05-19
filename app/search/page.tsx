import {FC} from 'react';
import {auth} from '../../auth';
import {SessionProvider} from 'next-auth/react';
import {redirect} from 'next/navigation';
import Search from '@/components/Search';
import {getProductsToLend} from '@/fetchMethods/getProductsToLend';
import {Product, User} from '@/constants/types';
import Footer from '@/components/Footer';
import {getUser} from '@/fetchMethods/getUser';

const Page: FC<{searchParams?: {userId?: string; productId?: string}}> = async ({searchParams}) => {
  const session = await auth();
  if (!session) redirect('/login');
  const products = await fetchData(session.user?.name || '');

  return (
    <SessionProvider basePath={'/api/auth'} session={session}>
      <div className='flex flex-1'>
        <Search products={products} username={session.user?.name || ''} />
      </div>
      <Footer />
    </SessionProvider>
  );
};

const fetchData = async (name?: string) => {
  const users: User[] = await getUser();
  const user: User | undefined = users.find((user) => user.userName === name);
  if (!user) return;
  const products: Product[] = await getProductsToLend(user.userId);

  return products;
};

export const revalidate = 0;

export default Page;
