'use client';
import {Lending, Product, User} from '@/constants/types';
import {lendProduct} from '@/fetchMethods/lendProduct';
import {FC, useEffect, useState} from 'react';
import Button from './Button';
import {getProductImage} from '@/fetchMethods/getProductImage';
import NextImage from 'next/image';
import BoxModal from './BoxModal';
import {DateInput} from './DateInput';
import TextInput from './TextInput';
import {addDays, isBefore, isAfter} from 'date-fns';

interface Props {
  product?: Product;
  ownerOfProduct?: User;
  user?: User;
  lendings?: Lending[];
}

const ProductDetail: FC<Props> = ({product, ownerOfProduct, user, lendings}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 1));
  const [duration, setDuration] = useState<number>(1);
  const [disabled, setDisabled] = useState<boolean>(false);
  const reservedArray = lendings?.map((item) => ({
    startDate: new Date(item.startingAt),
    endDate: new Date(item.endingAt),
  }));

  const updateEndDate = (startDate: Date, duration: number) => {
    setEndDate(addDays(startDate, duration));
  };
  useEffect(() => {
    reservedArray?.forEach((reservedDates) => {
      const isStartDateBetween =
        isBefore(startDate, reservedDates.endDate) && isAfter(startDate, reservedDates.startDate);
      const isEndDateBetween = isBefore(endDate, reservedDates.endDate) && isAfter(endDate, reservedDates.startDate);
      setDisabled(isStartDateBetween || isEndDateBetween);
      console.log(isBefore(reservedDates.endDate, endDate));
      return;
    });
  }, [startDate, endDate]);
  useEffect(() => {
    const getImage = async () => {
      if (!product?.id) return;
      const image = await getProductImage(product.id);
      if (!image) return;
      setImageSrc(image);
    };
    getImage();
  }, []);
  console.log(endDate);
  return (
    <>
      <div className='w-full'>
        <div className='flex flex-col'>
          <div className='text-48 py-10 bg-grey bg-opacity-35 boxed font-medium  uppercase'>{product?.title}</div>
          <div className='relative mx-auto  rounded-md w-[500px] aspect-[10/8]'>
            <NextImage
              src={imageSrc || '/placeholder.png'}
              alt={product?.title || 'Product image'}
              fill
              className='rounded-md object-contain'
            />
          </div>

          <div className=' py-10 bg-grey  bg-opacity-35 boxed font-medium  uppercase'>
            <span className='text-22 text-blueberry'>Details zum Produkt</span>
            <div className='mt-5'>{product?.description}</div>
          </div>
          <div>
            <div className=' py-10 flex flex-col bg-opacity-35 boxed font-medium  uppercase'>
              <span className='text-22 text-blueberry'>Anbieter</span>
              <span>
                {ownerOfProduct?.name} {ownerOfProduct?.lastName}
              </span>
            </div>
          </div>
          <div className='mx-auto text-18 my-4'>Preis Pro Tag: {product?.pricePerDay}€</div>
          <Button
            type='button'
            className='mx-auto'
            onClick={() => {
              setOpen(true);
            }}
            label={'buchen'}
          />
        </div>
      </div>

      <BoxModal onClose={() => setOpen(false)} open={open}>
        <div className='flex flex-col gap-y-5'>
          <DateInput
            min={new Date().toISOString().split('T')[0]}
            defaultValue={new Date().toISOString().split('T')[0]}
            name={''}
            onChange={(e) => {
              const tmpStartDate = new Date(e.currentTarget.value);
              setStartDate(tmpStartDate);
              updateEndDate(tmpStartDate, duration);
            }}
            label='Start Datum'
          />
          <TextInput
            isValidating={false}
            type='number'
            defaultValue='1'
            placeholder='Anzahl Tage'
            onChange={(e) => {
              const tmpDuration = parseInt(e.currentTarget.value);
              setDuration(tmpDuration);
              updateEndDate(startDate, tmpDuration);
            }}
          />

          {disabled && (
            <div className='flex flex-col gap-y-2'>
              <div className='text-18 font-medium'>Bereits ausgeliehen:</div>
              {reservedArray?.map((item, index) => (
                <div key={index} className='flex flex-row gap-x-3'>
                  <span>{item.startDate.toLocaleDateString()}</span>
                  <span>-</span>
                  <span>{item.endDate.toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          )}
          <Button
            type='button'
            disabled={disabled}
            onClick={async () => {
              await lendProduct(product?.id, user?.userId, ownerOfProduct?.userId, startDate, duration);
            }}
            className='mt-5'
            label={'Kostenpflichtig ausleihen'}
          />
        </div>
      </BoxModal>
    </>
  );
};
export default ProductDetail;
