import {FC} from 'react';
import OverviewCardsBox from './OverviewCardsBox';
import OverviewCardsRow from './OverviewCardsRow';

interface OverviewProps {
  username?: string;
  productAmount?: number;
}

const Overview: FC<OverviewProps> = ({username, productAmount}) => {
  return (
    <div className='flex w-full flex-col gap-y-6'>
      <div className='flex w-full lg:flex-row gap-6 flex-col'>
        <div className='w-full'>
          <OverviewCardsRow
            title={`Hi ${username || 'Mustermann'},`}
            text={
              'Hier hast du eine kurze Übersicht über Merkliste und wie viele Produkte du in deine Inventar Liste hast.'
            }
            variant='userInfo'
            imageSrc='/assets/sharing.png'
          />
        </div>
      </div>
      <div className='flex w-full lg:flex-row gap-6 flex-col'>
        <div className='w-full'>
          <OverviewCardsBox productAmount={productAmount} title={'Übersicht'} variant='lendBorrow' />
        </div>
        <div className='w-full'>
          <OverviewCardsBox title={'Merkliste'} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
