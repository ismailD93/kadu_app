import Register from '../../components/Register';

const Page = async () => {
  return (
    <div className='flex items-center min-h-full justify-center'>
      <Register />
    </div>
  );
};

const fetchData = async () => {};

export const revalidate = 0;

export default Page;
