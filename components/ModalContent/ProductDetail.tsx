import {FC} from 'react';
import {ProductCardsProps} from '../ProductCards';
import NextImage from 'next/image';
import Button from '../Button';

interface ProductDetailProps {
  name?: string;
  pricePerDay?: string;
  productCreated?: (success: boolean) => void;
  productDetails?: ProductCardsProps;
  onDelete?: () => void;
}

const ProductDetail: FC<ProductDetailProps> = ({productDetails, productCreated, onDelete}) => {
  return (
    <div>
      <div className='min-w-full flex flex-col items-center justify-center'>
        <div className='text-22 font-medium'>{productDetails?.productName}</div>
        <div className='min-w-[400px] mt-5 max-w-[400px] aspect-[2/1] relative'>
          <NextImage fill src={productDetails?.imageUrl || ''} className='object-cover' alt='produkt' />
        </div>
      </div>
      <div className='mt-5'>
        <div className='text-18'>Produktbeschreibung: {productDetails?.description}</div>
        <div className='text-18'>Preis pro Tag: {productDetails?.preis} €</div>
      </div>
      <div className='flex justify-center w-full my-5'>
        <Button variant='red' onClick={() => onDelete?.()} label={'Produkt entfernen'} />
      </div>
    </div>
  );
};
export default ProductDetail;
