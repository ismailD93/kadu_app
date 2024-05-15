'use client';
import classNames from 'classnames';
import {FC, ReactNode, useState} from 'react';
import {WheelIcon} from '../../icons/WheelIcon';
import Button from '../Button';
import Link from 'next/link';

interface DashboardTemplateProps {
  children: ReactNode;
  selectedTap?: (value: string) => void;
  tab?: string;
  userId?: string;
}
export type SelectedProps = {
  overview?: boolean;
  lend?: boolean;
  borrow?: boolean;
  watchList?: boolean;
  settings?: boolean;
};

const DashboardTemplate: FC<DashboardTemplateProps> = ({children, selectedTap, tab, userId}) => {
  const [selected, setSelected] = useState<SelectedProps>({
    overview: false,
    lend: false,
    borrow: false,
    watchList: false,
    settings: false,
  });
  const tabs: {key: 'overview' | 'borrow' | 'lend' | 'watchList'; label: string}[] = [
    {key: 'overview', label: 'Overview'},
    {key: 'borrow', label: 'Ausgeliehen'},
    {key: 'lend', label: 'Verliehen'},
    {key: 'watchList', label: 'Merkliste'},
  ];

  return (
    <div className='flex h-full select-none'>
      <div className='w-72 fixed justify-between border-r border-grey flex flex-col min-h-full'>
        <div className='flex flex-col w-full items-center'>
          <div className='border-b'>
            <div className='size-20 mt-5 mb-2 bg-blueberry rounded-md'></div>
            <span className=''>USERNAME</span>
          </div>
          <div className='flex flex-col w-full mt-10'>
            {tabs.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    selectedTap?.(item.key), setSelected({[item.key]: [item.key]});
                  }}
                  key={index}
                  className={classNames(
                    'py-3 select-none cursor-pointer border-t border-t-grey w-full flex justify-center',
                    {
                      'bg-indigo-ink text-white': selected[item.key] && tab !== 'settings',
                      'hover:bg-blueberry hover:text-white': !selected[item.key] || tab === 'settings',
                    }
                  )}>
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
        <Link
          href={`/dashboard?userId=${userId}/search`}
          className='mx-auto border-indigo-ink border px-4 py-3 rounded-full hover:text-white hover:bg-indigo-ink'>
          Artikel suchen
        </Link>
        <div
          onClick={() => {
            selectedTap?.('settings');
          }}
          className='h-full mx-auto mb-10'>
          <WheelIcon className='h-10 w-10' />
        </div>
      </div>
      <div className='w-full flex ml-[324px] m-10 relative'>{children}</div>
    </div>
  );
};

export default DashboardTemplate;
