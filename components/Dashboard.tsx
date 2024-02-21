import {FC} from 'react';
import DashboardTemplate from './dashboardComponents/DashboardTemplate';

const Dashboard: FC = () => {
  return (
    <div className='w-full h-full'>
      <DashboardTemplate>CONTENT</DashboardTemplate>
    </div>
  );
};

export default Dashboard;
