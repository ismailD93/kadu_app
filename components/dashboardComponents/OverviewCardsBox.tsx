import {FC} from 'react';

interface OverviewCardBoxProps {
  variant?: 'lendBorrow' | 'help';
  title: string;
  productAmount?: number;
  borrowed?: number;
  lend?: number;
}

const OverviewCardsBox: FC<OverviewCardBoxProps> = ({variant, title, productAmount, borrowed, lend}) => {
  return (
    <div className='w-full h-full gap-x-2 rounded-md p-10 bg-white flex'>
      <div className='flex flex-col w-full'>
        <div className='text-22 font-semibold'>{title}</div>
        {variant === 'lendBorrow' ? (
          <div className='flex flex-col justify-end h-full'>
            <div className='mt-10 text-center mb-5 flex xl:flex-row'>
              <span className='text-22 font-medium'>Produkte im Inventar:</span>
              <span className='text-18 ml-1 my-auto'>{productAmount || 0}</span>
            </div>
            <div className='flex h-full justify-end  gap-y-5 flex-col xl:flex-row xl:items-end xl:justify-between'>
              <div className='flex text-center flex-col'>
                <span className='text-22 font-medium'>Ausgeliehen</span>
                <span className='text-18'>{borrowed || 0}</span>
              </div>
              <div className='flex text-center flex-col'>
                <span className='text-22 font-medium'>Verliehen</span>
                <span className='text-18'>{lend || 0}</span>
              </div>
            </div>
          </div>
        ) : (
          <div>test</div>
        )}
      </div>
    </div>
  );
};

export default OverviewCardsBox;
