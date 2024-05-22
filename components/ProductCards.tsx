import {FC} from 'react';
import NextImage from 'next/image';
import {MoneyIcon} from '@/icons/MoneyIcon';
import {TrashIcon} from '@/icons/TrashIcon';

export interface ProductCardsProps {
  productName?: string;
  preis?: number;
  id?: string;
  variant?: 'borrowed' | 'offer';
  imageUrl?: string;
  owner?: string;
  description?: string;
  onClick?: () => void;
}

const ProductCards: FC<ProductCardsProps> = ({productName, preis, imageUrl, owner, description, onClick}) => {
  return (
    <div className='w-full h-full hover:shadow-md bg-white p-4 rounded relative'>
      <div className='flex h-full gap-x-4 w-full'>
        <div className='relative rounded-md w-[300px] aspect-[10/8]'>
          <NextImage
            src={imageUrl || '/placeholder.png'}
            alt={productName || 'Product image'}
            fill
            className='rounded-md object-contain'
          />
        </div>
        <div className='flex border-l pl-1 border-grey w-full flex-col'>
          <div className='w-full justify-between flex h-1/2 px-5 border-b border-grey text-18 font-medium'>
            <div className='text-22 my-auto'>
              Produkt: {productName}
              <div className='text-dark-grey'>{owner}</div>
            </div>

            <div className='mt-2 text-green my-auto flex flex-col'>
              <span>Pro Tag</span>
              <div className='flex text-36'>
                <MoneyIcon className='w-8 h-8 mr-3 my-auto' /> {preis} €
              </div>
            </div>
          </div>
          <div className='h-1/2 px-5 pt-4'>Beschreibung: {description}</div>
        </div>
        <div onClick={() => onClick?.()} className='absolute bottom-5 right-5'>
          <TrashIcon className='h-10 text-red w-10' />
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
