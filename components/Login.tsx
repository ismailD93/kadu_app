'use client';

import {FC, useState} from 'react';
import {useFormik} from 'formik';
import loginFormSchema from '../validation/loginSchema';
import TextInput from './TextInput';
import Link from 'next/link';
import Button from './Button';

const Login: FC = () => {
  const [userNameFalse, setUserNameFalse] = useState();
  const [pwFalse, setPwFalse] = useState();
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
    <div className='max-w-[500px] px-6 py-6 w-full rounded-lg drop-shadow-xl bg-white'>
      <div className='font-semibold text-lg mb-10'>
        Login <div className='border-t border-grey mt-1.5' />{' '}
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
          />{' '}
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
        <div className='flex w-full justify-center mt-5 gap-x-2 mb-2'>
          <Button form='loginForm' className='w-full' type='submit' label={'Anmelden'} />
          <Button link='/regist' className='w-full' type='submit' label={'Registrieren'} />
        </div>
        <Link className='text-[#0096ff]' href='/changePw'>
          Passwort vergessen ?
        </Link>
      </form>
    </div>
  );
};

export default Login;
