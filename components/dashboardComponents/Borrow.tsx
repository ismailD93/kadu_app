import {Product} from '@/constants/types';
import {ChevronIcon} from '@/icons/ChevronIcon';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, useState} from 'react';
import ProductCards from '../ProductCards';
import useGetImageUrl from '@/hooks/getImageUrl';

interface BorrowProsp {
  products?: Product[];
}

const Borrow: FC<BorrowProsp> = ({products}) => {
  const [open, setOpen] = useState<{borrowed?: boolean}>({borrowed: false});
  const imageurl: {productId: string; imageUrl: string}[] = useGetImageUrl(products);
  return (
    <div className='flex flex-col w-full gap-y-10'>
      <div
        onClick={() => setOpen({borrowed: !open.borrowed})}
        className={classNames('flex cursor-pointer py-4 px-4 w-full', {
          'border rounded': !open.borrowed,
          'border-x border-t rounded-t font-medium': open.borrowed,
        })}>
        <div className={classNames('w-full text-18 lg:text-22')}>Ausgeliehen</div>
        <div className='my-auto'>
          <ChevronIcon className={classNames('w-6 h-6 transition-all', {'duration-300 rotate-180': !open.borrowed})} />
        </div>
      </div>
      {open.borrowed && (
        <>
          <div className='border-b mx-6' />
          <div className={classNames('select-none border-x px-4 border-b py-4', {})}>
            <div className='flex flex-col gap-y-3'>
              {products?.map((item, index) => {
                let url = '';
                imageurl.forEach((image) => {
                  if (image.productId === item.id) {
                    url = image.imageUrl;
                  }
                });
                return (
                  <div key={index}>
                    <ProductCards imageUrl={url} productName={item.title} preis={item.pricePerDay} />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
      <Link
        href={`/search`}
        className='mx-auto border-indigo-ink border px-4 py-3 rounded-full hover:text-white hover:bg-indigo-ink'>
        Artikel suchen
      </Link>
    </div>
  );
};

export default Borrow;
