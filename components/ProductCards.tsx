import {FC} from 'react';

export interface ProductCardsProps {
  productName?: string;
  addedAt?: string;
  status?: string;
  lendTill?: string;
}

const ProductCards: FC<ProductCardsProps> = ({productName, addedAt, status, lendTill}) => {
  return (
    <div className='w-full hover:shadow-md bg-white p-4 rounded'>
      <div className='flex gap-x-4 w-full'>
        <div className='w-full max-w-[80px] h-20 rounded bg-blueberry'>IMAGE</div>
        <div className='flex w-full justify-between flex-col'>
          <div className='mx-auto text-18 font-medium'>{productName}</div>
          <div className='flex text-center justify-between'>
            <div className='flex-col'>
              Hinzugefügt am
              <div>{addedAt}</div>
            </div>
            <div className='flex-col'>
              Status
              <div>{status}</div>
            </div>
            <div className='flex-col'>
              Verliehen bis
              <div>{lendTill}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
