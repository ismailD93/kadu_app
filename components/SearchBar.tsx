'use client';
// TEST COMPONENT
import {FC, useState} from 'react';

import Button from './Button';
import classNames from 'classnames';
import {motion} from 'framer-motion';
import {addMonths, format} from 'date-fns';
import {de} from 'date-fns/locale';
import TextInput from './TextInput';
import {ChevronIcon} from '../icons/ChevronIcon';

interface SearchBarProps {
  filterActive?: boolean;
}

const SearchBar: FC<SearchBarProps> = ({filterActive = true}) => {
  const [appliedMonth, setAppliedMonth] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string[]>(appliedMonth);
  const [openAdvancedSearch, setOpenAdvancedSearch] = useState<boolean>(false);

  const currentDate = new Date();
  const actualMonth = format(currentDate, 'MMMM yy', {locale: de});
  const next12Months: [{date: Date; monthName: string}] = [{date: currentDate, monthName: actualMonth}];
  for (let i = 1; i < 12; i++) {
    const nextMonth = addMonths(currentDate, i);
    const formattedMonthName = format(nextMonth, 'MMMM yy', {locale: de});

    next12Months.push({
      date: nextMonth,
      monthName: formattedMonthName,
    });
  }

  console.log('selected:', selectedMonth, 'applied:', appliedMonth);

  return (
    <div className='bg-blue'>
      <div className={classNames('boxed', {'pt-10': filterActive, 'py-10': !filterActive})}>
        <div className='flex flex-col gap-4 md:flex-row'>
          <TextInput name={'region'} isValidating={false} />
          <TextInput name={'startDate'} isValidating={false} />
          <div className='my-auto'>
            <Button label={'Suche'} className='max-md:w-full' />
          </div>
        </div>
        {filterActive && !openAdvancedSearch && (
          <div className='py-6 flex'>
            <div
              onClick={() => setOpenAdvancedSearch(true)}
              className='cursor-pointer max-w-[150px] w-full flex items-center gap-x-2 mr-8'>
              <span className='font-semibold'>{appliedMonth.length}</span>
              Filter aktiv
              <ChevronIcon />
            </div>
            <div className='flex gap-4 flex-wrap'>
              {appliedMonth.map((item, index) => {
                return (
                  <Button
                    onClick={() => {
                      const newValue = item;
                      const savedValues = selectedMonth;
                      const isIncluded = savedValues.includes(newValue);
                      if (isIncluded) {
                        const index = savedValues.findIndex((value) => value === item);
                        const tmp = [
                          ...savedValues.slice(0, index),
                          ...savedValues.slice(index + 1, savedValues.length),
                        ];
                        setAppliedMonth(tmp);
                        setSelectedMonth(tmp);
                      }
                    }}
                    key={index}
                    label={item}
                  />
                );
              })}
            </div>
          </div>
        )}
        {openAdvancedSearch && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: {opacity: 1, height: 'auto'},
              collapsed: {opacity: 0, height: 0},
            }}
            transition={{duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}
            className='mt-16'>
            <div className='mb-10'>
              <span className='font-semibold'>Erweiterte Suche</span> ({selectedMonth.length} Filter ausgewählt)
              <div className='border-b mt-2' />
            </div>
            <div className='flex flex-col gap-4 md:flex-row mb-16'>
              <TextInput name={'region'} isValidating={false} />
              <TextInput name={'startDate'} isValidating={false} />
            </div>
            <span className='font-bold text-20'>Ab wann soll die Urlaubspflege stattfinden?</span>
            <div className='mt-6 flex gap-4 flex-wrap'>
              {next12Months.map((item, index) => {
                return (
                  <div key={index}>
                    <Button
                      onClick={() => {
                        const newValue = item.monthName;
                        const savedValues = selectedMonth;
                        const isIncluded = savedValues.includes(newValue);
                        if (isIncluded) {
                          const index = savedValues.findIndex((value) => value === item.monthName);
                          const tmp = [
                            ...savedValues.slice(0, index),
                            ...savedValues.slice(index + 1, savedValues.length),
                          ];
                          setSelectedMonth(tmp);
                        } else {
                          setSelectedMonth((prev) => [...prev, item.monthName]);
                        }
                      }}
                      label={item.monthName}
                    />
                  </div>
                );
              })}
            </div>
            <div className='flex mt-16 pb-10 md:pb-16 w-full gap-y-10 md:flex-row flex-col items-center md:justify-end gap-x-6'>
              <Button
                disabled={!selectedMonth.length}
                label='Filter anwenden'
                onClick={() => {
                  setAppliedMonth(selectedMonth);
                  setOpenAdvancedSearch(false);
                }}
              />
              <div
                className='my-auto cursor-pointer underline underline-offset-4 font-semibold'
                onClick={() => {
                  setOpenAdvancedSearch(false);
                  setSelectedMonth(appliedMonth);
                }}>
                Schließen
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default SearchBar;
