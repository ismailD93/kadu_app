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
      <div className='w-full my-auto'>
        <div className='text-22 font-semibold'>{title}</div>
        <div className='mt-4'>{text}</div>
      </div>
      <div className='w-full relative aspect-square'>
        {imageSrc && <NextImage className='object-contain' fill src={imageSrc} alt={'sharing'} />}
      </div>
    </div>
  );
};
export default OverviewCardsRow;
