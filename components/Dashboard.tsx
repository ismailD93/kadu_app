'use client';
import {FC, useState} from 'react';
import DashboardTemplate from './dashboardComponents/DashboardTemplate';
import Overview from './dashboardComponents/Overview';
import Borrow from './dashboardComponents/Borrow';
import Inventory from './dashboardComponents/Inventory';
import Lend from './dashboardComponents/Lend';
import Settings from './dashboardComponents/Settings';
import {Product} from '@/constants/types';

interface DashboardProps {
  userId: string;
  userName?: string;
  products?: Product[];
  productAmount?: number;
  lendings?: {lendedProducts: Product[] | []; borrowedProducts: Product[] | []};
}

const Dashboard: FC<DashboardProps> = ({userId, userName, products, productAmount, lendings}) => {
  const [clickedTab, setClickedTab] = useState<string>('');

  return (
    <div className='w-full h-full'>
      <DashboardTemplate
        userId={userId}
        userName={userName}
        tab={clickedTab}
        selectedTap={(value) => {
          setClickedTab(value);
        }}>
        {clickedTab === 'watchList' ? (
          <Inventory />
        ) : clickedTab === 'borrow' ? (
          <Borrow products={lendings?.borrowedProducts} />
        ) : clickedTab === 'lend' ? (
          <Lend lendedProducts={lendings?.lendedProducts} owner={userName} products={products} userId={userId} />
        ) : clickedTab === 'settings' ? (
          <Settings />
        ) : (
          <Overview username={userName} productAmount={productAmount} />
        )}
      </DashboardTemplate>
    </div>
  );
};

export default Dashboard;
