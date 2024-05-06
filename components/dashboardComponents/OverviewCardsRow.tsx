import {FC} from 'react';
import NextImage from 'next/image';
import {NotificationIcon} from '../../icons/NotificationIcon';
import {UserIcon} from '../../icons/UserIcon';

interface OverviewCardsRowProps {
  title: string;
  text: string;
  variant?: 'userInfo' | 'inventoryInfo';
  mails?: number;
  imageSrc?: string;
}

const OverviewCardsRow: FC<OverviewCardsRowProps> = ({title, text, variant, mails, imageSrc}) => {
  return (
    <div className='w-full h-full gap-x-2 rounded-md p-10 bg-white flex'>
      <div className='w-1/2'>
        <div className='text-22 font-semibold'>{title}</div>
        <div className='mt-4'>{text}</div>

        {variant === 'userInfo' ? (
          <div className='flex mt-6 flex-col'>
            <div className='flex flex-col gap-y-5'>
              <div className='flex gap-x-3 items-center'>
                <div className='h-8 w-8 bg-orange items-center flex justify-center rounded-full'>
                  <NotificationIcon className='text-white h-6 w-6' />
                </div>
                <span>{mails} Neue Anfragen</span>
              </div>
              <div className='flex gap-x-3 items-center'>
                <div className='h-8 w-8 bg-red items-center flex justify-center rounded-full'>
                  <UserIcon className='text-white h-6 w-6' />
                </div>
                <span>{mails} Besucher</span>
              </div>
            </div>
          </div>
        ) : (
          <div>test</div>
        )}
      </div>
      <div className='w-1/2 relative aspect-square'>
        {imageSrc && <NextImage className='object-contain' fill src={imageSrc} alt={'sharing'} />}
      </div>
    </div>
  );
};
export default OverviewCardsRow;
