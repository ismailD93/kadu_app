import classNames from 'classnames';
import {FC, useState} from 'react';
import ProductCards, {ProductCardsProps} from '../ProductCards';
import {ChevronIcon} from '../../icons/ChevronIcon';
import {PlusIcon} from '../../icons/PlusIcon';
import BoxModal from '../BoxModal';
import AddProduct from '../ModalContent/AddProduct';
import ProductDetail from '../ModalContent/ProductDetail';

const Lend: FC = () => {
  const [open, setOpen] = useState<{lend?: boolean; offer?: boolean}>({lend: false, offer: false});
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openProductModal, setOpenProductModal] = useState<boolean>(false);
  const [clickedProduct, setClickedProduct] = useState<ProductCardsProps>({});

  const products: ProductCardsProps[] = [
    {addedAt: '20.03.24', preis: '234', status: 'Verfügbar zum verleih', productName: 'Saal'},
    {addedAt: '30.02.24', preis: '422', status: 'Verfügbar zum verleih', productName: 'Bus'},
    {addedAt: '20.03.23', preis: '12', status: 'Verfügbar zum verleih', productName: 'Rasenmäher'},
    {addedAt: '22.02.24', preis: '23.4', status: 'Verfügbar zum verleih', productName: 'Laptop'},
  ];

  return (
    <>
      <div className='flex w-full flex-col gap-y-10'>
        <div>
          <div
            className={classNames('py-4 flex w-full justify-between px-4 text-18 lg:text-22', {
              'border rounded': !open.lend,
              'border-x border-t rounded-t font-medium': open.lend,
            })}
            onClick={() => setOpen({offer: false, lend: !open.lend})}>
            Verliehen
            <div className='my-auto'>
              <ChevronIcon className={classNames('w-6 h-6 transition-all', {'duration-300 rotate-180': !open.lend})} />
            </div>
          </div>
          {open.lend && (
            <>
              <div className='border-b mx-6' />
              <div className={classNames('select-none border-x px-4 border-b py-4', {})}>
                <div className='flex w-full cursor-pointer items-center justify-between text-18 lg:text-22'>
                  PRODUKTE
                </div>
              </div>
            </>
          )}
        </div>
        <div>
          <div
            onClick={() => setOpen({lend: false, offer: !open.offer})}
            className={classNames('flex cursor-pointer py-4 px-4 w-full', {
              'border rounded': !open.offer,
              'border-x border-t rounded-t font-medium': open.offer,
            })}>
            <div className={classNames('w-full text-18 lg:text-22')}>Zum Verleih angeboten</div>
            <div className='my-auto'>
              <ChevronIcon className={classNames('w-6 h-6 transition-all', {'duration-300 rotate-180': !open.offer})} />
            </div>
          </div>
          {open.offer && (
            <>
              <div className='border-b mx-6' />
              <div className={classNames('select-none border-x px-4 border-b py-4', {})}>
                <div className='flex flex-col gap-y-3'>
                  {products.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setClickedProduct({
                            addedAt: item.addedAt,
                            preis: item.preis,
                            image: item.image,
                            lendTill: item.lendTill,
                            productName: item.productName,
                          });
                          if (clickedProduct.productName) {
                            setOpenProductModal(true);
                          }
                        }}>
                        <ProductCards
                          productName={item.productName}
                          addedAt={item.addedAt}
                          lendTill={item.lendTill}
                          status={item.status}
                          preis={item.preis}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
        <div className='w-fit mt-10 mx-auto cursor-pointer' onClick={() => setOpenModal(true)}>
          <div
            className={classNames('flex flex-col rounded-md gap-y-4 border items-center cursor-pointer py-4 px-4', {})}>
            <div className={classNames('text-18 lg:text-22')}>Produkt zum Verleih anbieten</div>
            <PlusIcon className={classNames('w-6 h-6 transition-all', {'duration-300 rotate-180': !open.offer})} />
          </div>
        </div>
      </div>
      <BoxModal title='Produkt hinzufügen' onClose={() => setOpenModal(false)} open={openModal}>
        <AddProduct productCreated={(success) => setOpenModal(!success)} />
      </BoxModal>
      <BoxModal title={clickedProduct.productName} onClose={() => setOpenProductModal(false)} open={openProductModal}>
        <ProductDetail />
      </BoxModal>
    </>
  );
};

export default Lend;
