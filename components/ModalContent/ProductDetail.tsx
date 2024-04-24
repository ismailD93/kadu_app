import {FC} from 'react';

interface ProductDetailProps {
  name?: string;
  pricePerDay?: string;
  productCreated?: (success: boolean) => void;
}

const ProductDetail: FC<ProductDetailProps> = ({name, pricePerDay, productCreated}) => {
  return (
    <div>
      <div></div>
    </div>
  );
};
export default ProductDetail;
