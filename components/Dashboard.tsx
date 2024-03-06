'use client';
import {FC, useState} from 'react';
import DashboardTemplate from './dashboardComponents/DashboardTemplate';
import Overview from './dashboardComponents/Overview';
import Borrow from './dashboardComponents/Borrow';
import Inventory from './dashboardComponents/Inventory';
import Lend from './dashboardComponents/Lend';

const Dashboard: FC = () => {
  const [clickedTab, setClickedTab] = useState<string>('');
  console.log(clickedTab);

  return (
    <div className='w-full h-full'>
      <DashboardTemplate tab={clickedTab} selectedTap={(value) => setClickedTab(value)}>
        {clickedTab === 'inventory' ? (
          <Inventory />
        ) : clickedTab === 'borrow' ? (
          <Borrow />
        ) : clickedTab === 'lend' ? (
          <Lend />
        ) : (
          <Overview />
        )}
      </DashboardTemplate>
    </div>
  );
};

export default Dashboard;
