import classNames from 'classnames';
import {FC, useEffect, useState} from 'react';
import ProductCards, {ProductCardsProps} from '../ProductCards';
import {ChevronIcon} from '../../icons/ChevronIcon';
import {PlusIcon} from '../../icons/PlusIcon';
import BoxModal from '../BoxModal';
import AddProduct from '../ModalContent/AddProduct';
import ProductDetail from '../ModalContent/ProductDetail';
import {Product, User} from '@/constants/types';
import {getProductImage} from '@/fetchMethods/getProductImage';
import useGetImageUrl from '@/hooks/getImageUrl';

interface LendProps {
  userId: string;
  products?: Product[];
  owner?: string;
  lendedProducts?: Product[];
}

const Lend: FC<LendProps> = ({userId, products, owner, lendedProducts}) => {
  const [open, setOpen] = useState<{lend?: boolean; offer?: boolean}>({lend: false, offer: false});
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openProductModal, setOpenProductModal] = useState<boolean>(false);
  const [clickedProduct, setClickedProduct] = useState<ProductCardsProps>({});
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

  const lendedImageUrl: {productId: string; imageUrl: string}[] = useGetImageUrl(products);
  console.log(lendedProducts);

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
                <div className='flex flex-col gap-y-3'>
                  {lendedProducts?.map((item, index) => {
                    let url = '';
                    lendedImageUrl.forEach((image) => {
                      if (image.productId === item.id) {
                        url = image.imageUrl;
                      }
                    });
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setClickedProduct({
                            imageUrl: url,
                            owner: owner,
                            productName: item.title,
                            description: item.description,
                            preis: item.pricePerDay,
                          });
                          if (clickedProduct.productName) {
                            setOpenProductModal(true);
                          }
                        }}>
                        <ProductCards
                          imageUrl={url}
                          owner={owner}
                          productName={item.title}
                          description={item.description}
                          preis={item.pricePerDay}
                        />
                      </div>
                    );
                  })}
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
                  {products?.map((item, index) => {
                    let url = '';
                    imageSrc.forEach((image) => {
                      if (image.productId === item.id) {
                        url = image.imageUrl;
                      }
                    });
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setClickedProduct({
                            imageUrl: url,
                            owner: owner,
                            productName: item.title,
                            description: item.description,
                            preis: item.pricePerDay,
                          });
                          if (clickedProduct.productName) {
                            setOpenProductModal(true);
                          }
                        }}>
                        <ProductCards
                          imageUrl={url}
                          owner={owner}
                          productName={item.title}
                          description={item.description}
                          preis={item.pricePerDay}
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
        <AddProduct userId={userId} productCreated={(success) => setOpenModal(!success)} />
      </BoxModal>
      <BoxModal onClose={() => setOpenProductModal(false)} open={openProductModal}>
        <ProductDetail productDetails={clickedProduct} />
      </BoxModal>
    </>
  );
};

export default Lend;
