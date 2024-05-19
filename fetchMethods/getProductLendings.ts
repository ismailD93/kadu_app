import {Lending} from '@/constants/types';

const HEADERS = {'Content-Type': 'application/json'};

export async function getProductLendings(productId?: string) {
  try {
    const result = await fetch(`http://localhost:5258/api/Lending`, {
      method: 'GET',
      headers: HEADERS,
      mode: 'cors',
    });

    if (!result.ok) {
      throw new Error(`Error fetching lendings: ${result.statusText}`);
    }

    const lendings: Lending[] = await result.json();
    console.log('Fetched lendings:', lendings);

    const productLendings = lendings.filter((lending: Lending) => {
      if (!productId) return;
      return parseInt(lending.productId) === parseInt(productId);
    });

    console.log('Filtered lendings for product:', productLendings);

    return productLendings;
  } catch (error) {
    console.error('Error fetching lendings:', error);
    return [];
  }
}
