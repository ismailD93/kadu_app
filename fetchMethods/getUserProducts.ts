import {Product} from '@/constants/types';

const HEADERS = {'Content-Type': 'application/json'};

export async function getUserProducts(userId?: string) {
  const result = await fetch(`http://localhost:5258/api/Product`, {
    method: 'GET',
    headers: HEADERS,
    mode: 'cors',
  });

  const productsArr = await result.json();
  const userProducts = productsArr.filter((product: Product) => product.owner === userId);

  return userProducts;
}
