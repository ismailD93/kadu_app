import {addDays} from 'date-fns';
import {NextResponse} from 'next/server';

const HEADERS = {'Content-Type': 'application/json'};

export async function lendProduct(
  productId?: string,
  lendingUserId?: string,
  ownerId?: string,
  startingAt?: Date,
  duration?: number
) {
  try {
    if (!startingAt) return;
    const endingAt = addDays(startingAt, duration || 1);

    const result = await fetch(`http://localhost:5258/api/Lending`, {
      method: 'POST',
      headers: HEADERS,
      mode: 'cors',
      body: JSON.stringify({productId, lendingUserId, ownerId, startingAt, endingAt}),
    });
    const lending = await result.json();
    return NextResponse.json({success: true, lending});
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
