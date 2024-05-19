'use client';
import {FC, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {Product} from '@/constants/types';
import ProductOverviewBox from './ProductOverviewBox';
import {getProductImage} from '@/fetchMethods/getProductImage';

interface SearchProps {
  username?: string;
  products?: Product[];
}
const Search: FC<SearchProps> = ({username, products}) => {
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState<{productId: string; imageUrl: string}[]>([]);

  useEffect(() => {
    const getImage = async () => {
      if (!products) return;
      for (let index = 0; index < products?.length; index++) {
        const product = products[index];
        const image = await getProductImage(product.id);
        if (!image) return;
        setImageSrc((prev) => [...prev, {productId: product.id, imageUrl: image}]);
      }
    };
    getImage();
  }, []);

  return (
    <div className='flex flex-col flex-1'>
      <div className='bg-blueberry py-10'>
        <div className='flex justify-between w-full boxed'>
          <div className='flex text-48 text-white my-auto'>{username}</div>
          <div
            onClick={() => router.push('/dashboard')}
            className='cursor-pointer items-center my-auto border p-4 rounded-full border-white text-white'>
            Zurück zum Profil
          </div>
        </div>
      </div>
      <div className='boxed flex w-full flex-1'>
        <div className='py-20 w-full px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-grey bg-opacity-20 gap-y-10'>
          {products?.map((item, index) => {
            let url = '';
            imageSrc.forEach((image) => {
              if (image.productId === item.id) {
                url = image.imageUrl;
              }
            });
            return (
              <div key={index}>
                <div
                  className='h-[200px] max-w-[200px] cursor-pointer'
                  onClick={() => router.push(`/detail/${item.id}`)}>
                  <ProductOverviewBox imageUrl={url} product={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Search;
