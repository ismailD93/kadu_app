'use client';
import classNames from 'classnames';
import {FC, ReactNode, useState} from 'react';

interface DashboardTemplateProps {
  children: ReactNode;
  selectedTap?: (value: string) => void;
  tab?: string;
}
export type SelectedProps = {
  overview?: boolean;
  lend?: boolean;
  borrow?: boolean;
  inventory?: boolean;
};

const DashboardTemplate: FC<DashboardTemplateProps> = ({children, selectedTap, tab}) => {
  const [selected, setSelected] = useState<SelectedProps>({
    overview: false,
    lend: false,
    borrow: false,
    inventory: false,
  });
  const tabs: {key: 'overview' | 'borrow' | 'lend' | 'inventory'; label: string}[] = [
    {key: 'overview', label: 'Overview'},
    {key: 'borrow', label: 'Ausgeliehen'},
    {key: 'lend', label: 'Verliehen'},
    {key: 'inventory', label: 'Inventar'},
  ];

  return (
    <div className='flex h-full'>
      <div className='w-72 fixed border-r border-grey flex flex-col min-h-full'>
        <div className='flex flex-col w-full items-center'>
          <div className='border-b'>
            <div className='size-20 mt-5 mb-2 bg-blueberry rounded-md'></div>
            <span className=''>USERNAME</span>
          </div>
          <div className='flex flex-col w-full mt-10'>
            {tabs.map((item, index) => {
              console.log(selected[item.key]);
              return (
                <div
                  onClick={() => {
                    selectedTap?.(item.key), setSelected({[item.key]: [item.key]});
                  }}
                  key={index}
                  className={classNames('py-3 cursor-pointer border-t border-t-grey w-full flex justify-center', {
                    'bg-indigo-ink text-white': selected[item.key],
                    'hover:bg-blueberry hover:text-white': !selected[item.key],
                  })}>
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='w-full flex ml-[324px] m-10'>{children}</div>
    </div>
  );
};

export default DashboardTemplate;
