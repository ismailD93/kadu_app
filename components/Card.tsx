import {FC} from 'react';
import NextImage from 'next/image';

interface CardProps {
  text?: string;
  src: string;
  title?: string;
}

const Card: FC<CardProps> = ({text, title, src}) => {
  return (
    <div className='w-full p-10 md:p-20 rounded-md bg-white shadow-md'>
      <div className='flex md:flex-row flex-col'>
        <div className='my-auto flex flex-col text-center md:text-start w-full md:max-w-[300px]'>
          <div className='text-48 font-bold text-blueberry'>{title}</div>
          <div className='text-22 mt-10'>{text}</div>
        </div>
        <div className='relative aspect-[8/5] w-full max-w-[700px]'>
          <NextImage src={src} fill alt={'sharing'} />
        </div>
      </div>
    </div>
  );
};
export default Card;
