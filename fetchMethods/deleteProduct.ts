import {NextResponse} from 'next/server';

const HEADERS = {'Content-Type': 'application/json'};

export async function deleteProduct(productId?: string) {
  const result = await fetch(`http://localhost:5258/api/Product/${productId}`, {
    method: 'DELETE',
    headers: HEADERS,
    mode: 'cors',
  });

  return NextResponse.json({success: true});
}
