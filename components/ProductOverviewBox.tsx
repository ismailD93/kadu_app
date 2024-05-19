import {Product} from '@/constants/types';
import {FC} from 'react';
import NextImage from 'next/image';
import {MoneyIcon} from '@/icons/MoneyIcon';

interface ProductOverviewBoxProps {
  product?: Product;
  imageUrl?: string;
}
const ProductOverviewBox: FC<ProductOverviewBoxProps> = ({product, imageUrl}) => {
  return (
    <div className=''>
      <div className='max-h-28 rounded-t-md border-grey border aspect-square min-w-full relative'>
        <NextImage src={imageUrl || ''} className='rounded-t-md' fill alt={'sharing'} />
      </div>
      <div className='bg-white px-3 py-1 border-r border-l border-b border-grey rounded-b-md'>{product?.title}</div>
      <div className='bg-grey hover:shadow-md flex-col gap-y-2 rounded-b-md flex items-center font-medium justify-center mx-1 px-2 py-3 bg-opacity-30'>
        <div className='flex text-green'>
          <MoneyIcon className='h-5 w-5 mr-2' />
          <span>{product?.pricePerDay}€ / pro Tag</span>
        </div>
        <span>Zustand: {product?.condition}</span>
      </div>
    </div>
  );
};
export default ProductOverviewBox;
