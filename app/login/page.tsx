import Login from '../../components/Login';

const Page = async () => {
  return (
    <div className='flex items-center min-h-full justify-center'>
      <Login />
    </div>
  );
};

const fetchData = async () => {};

export const revalidate = 0;

export default Page;
