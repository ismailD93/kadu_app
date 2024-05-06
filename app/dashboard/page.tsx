import Dashboard from '../../components/Dashboard';

const Page = async () => {
  return (
    <div className='w-full'>
      <Dashboard />
    </div>
  );
};

const fetchData = async () => {};

export const revalidate = 0;

export default Page;
