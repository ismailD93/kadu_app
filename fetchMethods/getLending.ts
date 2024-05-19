import {Lending, Product} from '@/constants/types';
import {getAllProducts} from './getAllProducts';

const HEADERS = {'Content-Type': 'application/json'};

export async function getLending(userId?: string) {
  try {
    const result = await fetch(`http://localhost:5258/api/Lending`, {
      method: 'GET',
      headers: HEADERS,
      mode: 'cors',
    });

    const products = await getAllProducts();
    const lendings: Lending[] = await result.json();
    console.log(lendings);
    const lendedProducts = products.filter((product: Product) => {
      return !!lendings.some((lending: Lending) => {
        return lending.ownerId === product.owner && userId === lending.ownerId && lending.productId === product.id;
      });
    });

    const borrowedProducts = products.filter((product: Product) => {
      return lendings.some((lending: Lending) => lending.lendingUserId === userId && lending.productId === product.id);
    });

    return {lendedProducts, borrowedProducts};
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
