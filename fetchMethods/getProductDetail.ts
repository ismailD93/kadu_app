const HEADERS = {'Content-Type': 'application/json'};

export async function getProductDetail(productId?: string) {
  const result = await fetch(`http://localhost:5258/api/Product/${productId}`, {
    method: 'GET',
    headers: HEADERS,
    mode: 'cors',
  });

  const product = await result.json();

  return product;
}
