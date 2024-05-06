'use client';
import {AnimatePresence, motion} from 'framer-motion';
import {type FC, type ReactNode} from 'react';
import {CloseIcon} from '../icons/CloseIcon';
import useLockBodyScroll from '../hooks/useLockedBody';

export interface BoxModalProps {
  onClose: () => void;
  onEditClick?: () => void;
  open: boolean;
  children: ReactNode;
  title?: string;
  onDelete?: () => void;
  share?: boolean;
}

const BoxModal: FC<BoxModalProps> = ({onClose, open, title, children, share}) => {
  useLockBodyScroll(open, false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 0.5}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
            className='fixed inset-0 z-20 h-full bg-dark-blue'
            onClick={() => onClose()}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <>
            {/* Desktop Modal Design */}
            <motion.div
              initial={{top: 1500}}
              animate={{top: '50%', translateY: '-50%'}}
              exit={{top: 1500}}
              transition={{duration: 0.6}}
              className='fixed overflow-y-auto hidebar inset-x-0 z-20 mx-auto h-full max-h-[425px] w-[746px] bg-white px-10 text-dark-blue max-md:!hidden'>
              <div className='absolute right-5 top-5 cursor-pointer' onClick={onClose}>
                <CloseIcon className='h-6 w-6' />
              </div>
              <div className='mt-10 flex max-w-[550px] flex-col text-36'>{title}</div>
              <div className='no-scrollbar mb-12 mt-7 flex  w-full flex-1 flex-col text-dark-blue'>{children}</div>
            </motion.div>
            {/* Mobile Modal Design */}
            <motion.div
              initial={{bottom: -800}}
              animate={{bottom: 0}}
              exit={{bottom: -800}}
              transition={{duration: 0.6}}
              className='fixed bottom-0 right-0 z-20 flex w-full flex-col bg-white px-5 text-dark-blue md:hidden'>
              <div className='absolute right-5 top-5 my-auto flex w-full cursor-pointer justify-end' onClick={onClose}>
                <CloseIcon className='h-6 w-6' />{' '}
              </div>
              <div className='mt-20 flex flex-col text-22'>{title}</div>
              <div className='no-scrollbar mb-10 mt-5 flex h-full w-full flex-1 flex-col text-dark-blue'>
                {children}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default BoxModal;
