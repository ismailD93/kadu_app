'use client';

import {FC, useState} from 'react';
import {useFormik} from 'formik';
import loginFormSchema from '../validation/loginSchema';
import TextInput from './TextInput';
import Link from 'next/link';
import Button from './Button';
import NextImage from 'next/image';
import {useRouter} from 'next/navigation';

const Login: FC = () => {
  const [userNameFalse, setUserNameFalse] = useState();
  const [pwFalse, setPwFalse] = useState();
  const router = useRouter();
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: loginFormSchema(),
    initialValues: {
      userName: '',
      pw: '',
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
      } catch (error) {
        console.error(error, 'Error');
      }
    },
  });

  return (
    <div className='flex w-full items-center flex-col'>
      <div onClick={() => router.push('/')} className='mb-4 cursor-pointer'>
        <NextImage src={'assets/kaduLogoTransparent.svg'} alt={''} height={70} width={70} />
      </div>
      <div className='max-w-[500px] border border-grey border-opacity-30 px-6 py-6 w-full rounded-lg drop-shadow-xl bg-white'>
        <div className='font-semibold text-22 mb-10'>
          Login <div className='border-t border-grey mt-1.5' />
        </div>
        <form onSubmit={formik.handleSubmit} id='loginForm'>
          <div className='flex text-black flex-col gap-y-4'>
            <TextInput
              name='userName'
              placeholder='Benutzername'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!userNameFalse ? formik.errors.userName : ''}
              isValidating={false}
            />
            <TextInput
              name='pw'
              type='password'
              placeholder='Passwort'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!pwFalse ? formik.errors.pw : ''}
              isValidating={false}
            />
          </div>
          <div className='flex flex-col w-full justify-center mt-5 gap-x-2 mb-2'>
            <Button form='loginForm' className='w-full' type='submit' label={'Anmelden'} />
            <Link className='text-[#0096ff] text-center mt-3' href='/changePw'>
              Passwort vergessen ?
            </Link>
          </div>
        </form>
        <div className='flex mt-7 mb-3'>
          <div className='w-full h-full my-auto'>
            <div className='w-full border-t border-grey' />
          </div>
          <span className='mx-4 text-grey'>Registrieren</span>
          <div className='w-full h-full my-auto'>
            <div className='w-full border-t border-grey' />
          </div>
        </div>
        <Button link='/register' className='w-full' type='submit' label={'Erstelle ein Konto'} />
      </div>
    </div>
  );
};

export default Login;
