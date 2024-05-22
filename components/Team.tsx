'use client';
import {FC, Fragment, useRef, useState} from 'react';
import Image from 'next/image';
import {AnimatePresence, motion} from 'framer-motion';
import cn from 'classnames';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import NextImage from 'next/image';
import {useRouter} from 'next/navigation';

interface MemberGridItemComponentProps {
  id: string;
  name: string;
  jobTitle: string;
  imageSrc: string;
}

export interface MemberGridComponentProps {
  items: MemberGridItemComponentProps[];
}

const MemberGridDesktop: FC<MemberGridComponentProps> = ({items}) => {
  const [activeMember, setActiveMember] = useState<MemberGridItemComponentProps>({
    id: '1',
    jobTitle: 'Backend-Entwickler',
    name: 'Metehan Kavi',
    imageSrc: '/assets/meto.jpg',
  });
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const selectItem = (item: MemberGridItemComponentProps) => {
    if (!!activeMember && activeMember.id === item.id) {
      setActiveMember({
        id: '1',
        jobTitle: 'Backend-Entwickler',
        name: 'Metehan Kavi',
        imageSrc: '/assets/meto.jpg',
      });
      return;
    }
    setActiveMember(item);
  };

  return (
    <div>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col justify-center'>
          <div onClick={() => router.push('/')} className='mb-4 mt-10 mx-auto flex cursor-pointer'>
            <NextImage src={'assets/kaduLogoTransparent.svg'} alt={''} height={70} width={70} />
            <div className='text-36 items-center flex font-medium text-blueberry'>ADU</div>
          </div>
        </div>
      </div>

      <div className='hidden mt-32 flex-col max-h-[500px] w-full lg:flex' ref={ref}>
        <div className='w-full flex lg:flex-row'>
          <div className='relative flex flex-1 flex-col -mb-1'>
            <div
              key='team'
              className='sticky -mt-24 top-[70px] right-0 -left-1 h-[500px] rounded-md border-blueberry border-2'>
              <NextImage
                src={'/asset/kaduLogoTransparent.svg'}
                alt={'kadu'}
                fill
                className='rounded-sm'
                style={{objectPosition: 'center', objectFit: 'cover'}}
              />
            </div>

            <AnimatePresence>
              {!!activeMember && (
                <motion.div
                  initial={{opacity: 0, zIndex: 0}}
                  animate={{opacity: 1, zIndex: 30}}
                  transition={{duration: 0.4}}
                  className='absolute -top-24 bottom-1 right-0 -left-1'>
                  <div className='sticky top-[70px] h-[500px] border-blueberry border-2 rounded-md'>
                    <NextImage src={activeMember.imageSrc} fill className='rounded-md object-cover' alt={'sharing'} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className='flex-1 flex flex-col border-blueberry border-l-4 -ml-1'>
            {items.map((item, index) => {
              const active = !!activeMember && item.id === activeMember.id;
              return (
                <div
                  key={index}
                  className={cn('w-full flex flex-col py-5 px-8 border-blueberry border-b-2 space-y-1 cursor-pointer', {
                    'bg-white border-t text-blueberry': !active,
                    'bg-blueberry text-white': active,
                  })}
                  onClick={() => selectItem(item)}>
                  <span className='text-36'>{item.name}</span>
                  <span className='text-18'>{item.jobTitle}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const MemberGrid: FC<MemberGridComponentProps> = (props) => (
  <Fragment>
    <MemberGridDesktop {...props} />
  </Fragment>
);

export default MemberGrid;
