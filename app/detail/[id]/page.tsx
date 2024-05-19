import {FC} from 'react';
import {SessionProvider} from 'next-auth/react';
import {redirect} from 'next/navigation';
import {Product, User} from '@/constants/types';
import {auth} from '@/auth';
import {getProductDetail} from '@/fetchMethods/getProductDetail';
import ProductDetail from '@/components/ProductDetail';
import {getUser} from '@/fetchMethods/getUser';
import {getProductLendings} from '@/fetchMethods/getProductLendings';

const Page: FC<{params: {id: string}}> = async ({params}) => {
  const productId = params.id;
  const session = await auth();
  if (!session) redirect('/login');
  const fetch = await fetchData(productId, session?.user?.name || '');
  return (
    <SessionProvider basePath={'/api/auth'} session={session}>
      <ProductDetail
        lendings={fetch.lendings}
        user={fetch.user}
        product={fetch.product}
        ownerOfProduct={fetch.ownerOfProduct}
      />
    </SessionProvider>
  );
};

const fetchData = async (productId?: string, userName?: string) => {
  const product: Product = await getProductDetail(productId);
  const allUser: User[] = await getUser();
  const user = allUser.find((user) => user.userName === userName);
  const ownerOfProduct = allUser.find((owner) => owner.userId === product.owner);
  const lendings = await getProductLendings(productId);
  return {product, ownerOfProduct, user, lendings};
};

export const revalidate = 0;

export default Page;
