import {FC, ReactNode} from 'react';

interface DashboardTemplateProps {
  children: ReactNode;
}

const DashboardTemplate: FC<DashboardTemplateProps> = ({children}) => {
  return (
    <div className='flex h-full'>
      <div className='w-96 border-r border-grey flex flex-col min-h-full'>
        <div className='flex flex-col w-full items-center'>
          <div className='border-b'>
            <div className='size-20 mt-5 mb-2 bg-blueberry rounded-md'></div>
            <span className=''>USERNAME</span>
          </div>
          <div className='flex flex-col w-full mt-10'>
            <div className='py-3 border-t border-t-grey hover:bg-blueberry w-full flex justify-center'>Overview</div>
            <div className='py-3 border-t border-t-grey w-full flex justify-center'>Overview</div>
            <div className='py-3 border-t border-t-grey w-full flex justify-center'>Overview</div>
            <div className='py-3 border-t border-t-grey w-full flex justify-center'>Overview</div>
          </div>
        </div>
      </div>
      <div className='w-full m-4'>{children}</div>
    </div>
  );
};

export default DashboardTemplate;
