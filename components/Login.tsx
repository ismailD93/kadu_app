'use client';

import {FC, useEffect, useState} from 'react';
import {useFormik} from 'formik';
import loginFormSchema from '../validation/loginSchema';
import TextInput from './TextInput';
import Link from 'next/link';
import Button from './Button';
import NextImage from 'next/image';
import {useRouter} from 'next/navigation';
import {auth, signIn} from '../auth';
import {loginAction} from '@/actions/LoginAction';
import {ToastContainer, toast} from 'react-toastify';
import {useSession} from 'next-auth/react';

interface LoginProps {
  userLoggedIn: boolean;
}

const HEADERS = {'Content-Type': 'application/json'};

const Login: FC<LoginProps> = () => {
  const [clicked, setClicked] = useState<boolean>(false);
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
        const success = await loginAction(values.userName, values.pw);

        router.push('/dashboard');
      } catch (error) {
        return {
          state: 'ERROR',
          message: 'failed to login!',
          toast: {
            title: 'Fehlermeldung',
            message: 'Anmeldung fehlgeschlagen.',
            retry: true,
          },
        };
      }
    },
  });

  useEffect(() => {
    if (clicked) {
      const errorMessages = Object.values(formik.errors).map((error, index) => <div key={index}>{error}</div>);
      toast.error(<div>{errorMessages}</div>, {
        position: 'top-center',
        toastId: 'FormikErrors',
      });
    }
  }, [formik.errors]);

  return (
    <div className='flex w-full items-center flex-col'>
      <div onClick={() => router.push('/')} className='mb-4 cursor-pointer'>
        <NextImage src={'assets/kaduLogoTransparent.svg'} alt={''} height={70} width={70} />
      </div>
      <div className='max-w-[500px] border border-grey border-opacity-30 px-6 py-6 w-full rounded-lg drop-shadow-xl bg-white'>
        <div className='font-semibold text-22 mb-10'>
          Login <div className='border-t border-grey mt-1.5' />
        </div>
        <div className='toast-container'>
          <ToastContainer limit={2} />
        </div>
        <form onSubmit={formik.handleSubmit} id='loginForm'>
          <div className='flex text-black flex-col gap-y-4'>
            <TextInput
              name='userName'
              placeholder='Benutzername'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.userName}
              isValidating={false}
            />
            <TextInput
              name='pw'
              type='password'
              placeholder='Passwort'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.pw}
              isValidating={false}
            />
          </div>
          <div className='flex flex-col w-full justify-center mt-5 gap-x-2 mb-2'>
            <Button
              onClick={() => setClicked(true)}
              form='loginForm'
              className='w-full'
              type='submit'
              label={'Anmelden'}
            />
            {/* <Link className='text-[#0096ff] text-center mt-3' href='/changePw'>
              Passwort vergessen ?
            </Link> */}
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
        <Button link='/register' className='w-full' type='button' label={'Erstelle ein Konto'} />
      </div>
    </div>
  );
};

export default Login;
