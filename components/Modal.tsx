'use client';
import classNames from 'classnames';
import {AnimatePresence, motion} from 'framer-motion';
import {type FC, type ReactNode} from 'react';

import Image from 'next/image';
import {CloseIcon} from '../icons/CloseIcon';
import Link from 'next/link';

export interface WhiteModalComponentProps {
  onClose: () => void;
  onEditClick?: () => void;
  open: boolean;
  children: ReactNode;
  title?: string;
  onDelete?: () => void;
  isMenu?: boolean;
  tooltipModal?: boolean;
}

const WhiteModal: FC<WhiteModalComponentProps> = ({onClose, open, title, children, isMenu, tooltipModal}) => {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 0.5}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
            className='fixed inset-0 z-10 mb-10 h-full bg-dark-blue'
            onClick={() => onClose()}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <>
            {/* Desktop Modal Design */}
            <motion.div
              initial={{x: 750}}
              animate={{x: 0}}
              exit={{x: 750}}
              transition={{duration: 0.6}}
              className='fixed inset-y-0 right-0 z-10 hidden w-[513px] flex-col bg-white px-10 text-dark-blue md:flex'>
              <div className='absolute right-6 top-5' onClick={onClose}></div>
              <div className='mt-15 text-48'>{tooltipModal ? 'Info' : title}</div>
              <div className='no-scrollbar my-15 flex h-full w-full flex-1 flex-col overflow-y-auto text-dark-blue'>
                {children}
              </div>
            </motion.div>
            {/* Mobile Modal Design */}
            <motion.div
              initial={{y: 1200}}
              animate={{y: 0}}
              exit={{y: 1200}}
              transition={{duration: 0.6}}
              className={classNames('fixed inset-y-0 right-0 z-10 flex w-full flex-col px-5 text-dark-blue md:hidden', {
                'bg-dark-blue': isMenu,
                'bg-white': !isMenu,
              })}>
              <div className='absolute right-6 top-5 my-auto flex w-full cursor-pointer justify-end' onClick={onClose}>
                <CloseIcon className='text-black h-6 w-6 stroke-2' />
              </div>
              <Link href='/' onClick={() => onClose()} className='mx-auto mt-10'>
                <Image height={18} width={120} src={'/assets/kaduLogo.svg'} alt={'Kadu Logo'} />
              </Link>

              <div
                className={classNames(
                  'no-scrollbar flex h-full w-full flex-1 flex-col overflow-y-auto text-dark-blue',
                  {
                    'my-10 md:my-15': !isMenu,
                  }
                )}>
                {children}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhiteModal;
