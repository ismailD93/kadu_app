import {Product} from '@/constants/types';

const HEADERS = {'Content-Type': 'application/json'};

export async function getProductsToLend(userId?: string) {
  try {
    const result = await fetch(`http://localhost:5258/api/Product`, {
      method: 'GET',
      headers: HEADERS,
      mode: 'cors',
    });

    if (!result.ok) {
      throw new Error(`Error fetching products: ${result.statusText}`);
    }

    const productsArr = await result.json();
    const userProducts = productsArr.filter((product: Product) => {
      return product.owner !== userId;
    });

    return userProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
