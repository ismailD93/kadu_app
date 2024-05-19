export type User = {
  userId: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  category: string;
  isAvailable: string;
  condition: string;
  pricePerDay: number;
  owner: string;
};

export type Lending = {
  lendingId: string;
  productId: string;
  lendingUserId: string;
  ownerId: string;
  startingAt: Date;
  endingAt: Date;
  fee: number;
  feePerDay: number;
};
