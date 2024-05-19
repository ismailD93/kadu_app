import {FC} from 'react';
import Dashboard from '../../components/Dashboard';
import {auth} from '../../auth';
import {SessionProvider} from 'next-auth/react';
import {redirect} from 'next/navigation';
import {getUser} from '@/fetchMethods/getUser';
import {Product, User} from '@/constants/types';
import {getUserProducts} from '@/fetchMethods/getUserProducts';
import {getLending} from '@/fetchMethods/getLending';

const Page: FC<{searchParams?: {userId?: string}}> = async ({searchParams}) => {
  const session = await auth();
  if (!session) redirect('/login');
  const usermail = session.user?.email;
  const username = session.user?.name;
  if (!usermail || !username) return;

  const fetch = await fetchData(username, usermail);
  const products: Product[] | undefined = fetch.products;
  const productAmount = fetch.products.length;
  if (!fetch.user) return redirect('/login');
  return (
    <SessionProvider basePath={'/api/auth'} session={session}>
      <div className='w-full'>
        <Dashboard
          lendings={fetch.lendings}
          productAmount={productAmount}
          products={products}
          userName={fetch.user?.userName}
          userId={fetch.user?.userId}
        />
      </div>
    </SessionProvider>
  );
};

const fetchData = async (userName?: string, email?: string) => {
  const allUser: User[] = await getUser();
  const user = allUser.find((user) => user.email === email && user.userName === userName);
  const products: Product[] = await getUserProducts(user?.userId);
  const lendings: {lendedProducts: Product[] | []; borrowedProducts: Product[] | []} = await getLending(user?.userId);
  return {user, products, lendings};
};

export const revalidate = 0;

export default Page;
