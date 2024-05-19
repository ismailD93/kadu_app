import {Product} from '@/constants/types';
import {getProductImage} from '@/fetchMethods/getProductImage';
import {useEffect, useState} from 'react';

const useGetImageUrl = (products?: Product[]) => {
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

  return imageSrc;
};

export default useGetImageUrl;
