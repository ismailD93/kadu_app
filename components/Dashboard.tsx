'use client';
import {FC, useState} from 'react';
import DashboardTemplate from './dashboardComponents/DashboardTemplate';
import Overview from './dashboardComponents/Overview';
import Borrow from './dashboardComponents/Borrow';
import Inventory from './dashboardComponents/Inventory';
import Lend from './dashboardComponents/Lend';
import Settings from './dashboardComponents/Settings';

const Dashboard: FC = () => {
  const [clickedTab, setClickedTab] = useState<string>('');

  return (
    <div className='w-full h-full'>
      <DashboardTemplate
        tab={clickedTab}
        selectedTap={(value) => {
          setClickedTab(value);
        }}>
        {clickedTab === 'watchList' ? (
          <Inventory />
        ) : clickedTab === 'borrow' ? (
          <Borrow />
        ) : clickedTab === 'lend' ? (
          <Lend />
        ) : clickedTab === 'settings' ? (
          <Settings />
        ) : (
          <Overview />
        )}
      </DashboardTemplate>
    </div>
  );
};

export default Dashboard;
