import {FC} from 'react';
import OverviewCardsBox from './OverviewCardsBox';
import OverviewCardsRow from './OverviewCardsRow';

interface OverviewProps {
  username?: string;
}

const Overview: FC<OverviewProps> = ({username}) => {
  return (
    <div className='flex flex-col gap-y-6'>
      <div className='flex lg:flex-row gap-6 flex-col'>
        <div className='w-full lg:w-2/3'>
          <OverviewCardsRow
            title={`Hi ${username || 'Mustermann'},`}
            text={
              'Hier hast du eine kurze Übersicht über deine Benachrichtigungen und wie viele deine Inventar Liste angeschaut haben'
            }
            variant='userInfo'
            imageSrc='/assets/mail.png'
          />
        </div>
        <div className='w-full lg:w-1/3'>
          <OverviewCardsBox title={'Übersicht'} variant='lendBorrow' />
        </div>
      </div>
      <div className='flex lg:flex-row gap-6 flex-col'>
        <div className='w-full lg:w-1/3'>
          <OverviewCardsBox title={'Übersicht'} />
        </div>
        <div className='w-full lg:w-2/3'>
          <OverviewCardsRow
            title={`Hi ${username || 'Mustermann'},`}
            text={
              'Hier hast du eine kurze Übersicht über deine Benachrichtigungen und wie viele deine Inventar Liste angeschaut haben'
            }
            variant='userInfo'
            imageSrc='/assets/mail.png'
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
