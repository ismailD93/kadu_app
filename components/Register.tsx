'use client';

import {FC, useState} from 'react';
import {useFormik} from 'formik';
import TextInput from './TextInput';
import Link from 'next/link';
import Button from './Button';
import NextImage from 'next/image';
import {useRouter} from 'next/navigation';
import {registerFormSchema} from '../validation/registerSchema';

const Login: FC = () => {
  const [userNameFalse, setUserNameFalse] = useState();
  const [pwFalse, setPwFalse] = useState();
  const router = useRouter();
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: registerFormSchema(),
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      pw: '',
      pwRepeat: '',
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
      <div onClick={() => router.push('/')} className='mb-2 cursor-pointer'>
        <NextImage src={'assets/kaduLogoTransparent.svg'} alt={''} height={70} width={70} />
      </div>
      <div className='max-w-[500px] px-6 py-6 w-full md:rounded-lg md:drop-shadow-xl bg-white'>
        <div className='font-semibold text-22 mb-10'>
          Registrieren <div className='border-t border-grey mt-1.5' />{' '}
        </div>
        <form onSubmit={formik.handleSubmit} id='registerForm'>
          <div className='flex text-black flex-col gap-y-4'>
            <TextInput
              name='firstName'
              placeholder='Benutzername'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!userNameFalse ? formik.errors.userName : ''}
              isValidating={false}
            />
            <TextInput
              name='lastName'
              placeholder='Passwort'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!pwFalse ? formik.errors.pw : ''}
              isValidating={false}
            />
            <TextInput
              name='email'
              placeholder='Email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!pwFalse ? formik.errors.pw : ''}
              isValidating={false}
            />
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
            <TextInput
              name='pwRepeat'
              type='password'
              placeholder='Passwort wiederholen'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!pwFalse ? formik.errors.pw : ''}
              isValidating={false}
            />
          </div>
          <div className='flex w-full justify-center mt-5 gap-x-2 mb-2'>
            <Button form='registerForm' className='w-full' type='submit' label={'Registrieren'} />
          </div>
          <Link className='text-[#0096ff]' href='/login'>
            Anmelden
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
