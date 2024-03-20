import classNames from 'classnames';
import {FC, useState} from 'react';
import ProductCards, {ProductCardsProps} from '../ProductCards';
import {CloseIcon} from '../../icons/CloseIcon';

const Lend: FC = () => {
  const [open, setOpen] = useState<{lend?: boolean; offer?: boolean}>({lend: false, offer: false});
  console.log(open);
  const products: ProductCardsProps[] = [
    {addedAt: '20.03.24', lendTill: '25.03.24', status: 'verliehen', productName: 'Saal'},
    {addedAt: '30.02.24', lendTill: '', status: 'Verfügbar zum verleih', productName: 'Bus'},
    {addedAt: '20.03.23', lendTill: '25.03.24', status: 'verliehen', productName: 'Rasenmäher'},
    {addedAt: '22.02.24', lendTill: '10.07.24', status: 'verliehen', productName: 'Laptop'},
  ];
  return (
    <div className='flex w-full flex-col gap-y-10'>
      <div>
        <div
          className={classNames('py-4 px-4 text-18 lg:text-22', {
            'border rounded': !open.lend,
            'border-x border-t rounded-t font-medium': open.lend,
          })}
          onClick={() => setOpen({offer: false, lend: !open.lend})}>
          Verliehen
        </div>
        {open.lend && (
          <>
            <div className='border-b mx-6' />
            <div className={classNames('select-none border-x px-4 border-b py-4', {})}>
              <div className='flex w-full cursor-pointer items-center justify-between text-18 lg:text-22'>PRODUCTE</div>
            </div>
          </>
        )}
      </div>
      <div>
        <div
          className={classNames('flex py-4 px-4 w-full', {
            'border rounded': !open.offer,
            'border-x border-t rounded-t font-medium': open.offer,
          })}>
          <div
            className={classNames('w-full text-18 lg:text-22')}
            onClick={() => setOpen({lend: false, offer: !open.offer})}>
            Zum Verleih angeboten
          </div>
          <div className='my-auto'>
            <CloseIcon className='w-6 h-6' />
          </div>
        </div>
        {open.offer && (
          <>
            <div className='border-b mx-6' />
            <div className={classNames('select-none border-x px-4 border-b py-4', {})}>
              <div className='flex flex-col gap-y-3'>
                {products.map((item, index) => {
                  return (
                    <ProductCards
                      key={index}
                      productName={item.productName}
                      addedAt={item.addedAt}
                      lendTill={item.lendTill}
                      status={item.status}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Lend;
