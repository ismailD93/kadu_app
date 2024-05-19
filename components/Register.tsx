'use client';

import {FC, useEffect, useState} from 'react';
import {useFormik} from 'formik';
import TextInput from './TextInput';
import Link from 'next/link';
import Button from './Button';
import NextImage from 'next/image';
import {useRouter} from 'next/navigation';
import {registerFormSchema} from '../validation/registerSchema';
import {Slide, ToastContainer, toast} from 'react-toastify';
import useDebounce from '@/hooks/useDebounce';
const HEADERS = {'Content-Type': 'application/json'};

const Login: FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [createSuccess, setCreateSuccess] = useState<boolean>(false);
  const debouncedRedirect = useDebounce(createSuccess, 3000);
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
      // pwRepeat: '',
    },
    onSubmit: async (values) => {
      try {
        const result = await fetch(`http://localhost:5258/api/User`, {
          method: 'POST',
          headers: HEADERS,
          mode: 'cors',
          body: JSON.stringify({
            Name: values.firstName,
            lastName: values.lastName,
            userName: values.userName,
            email: values.email,
            Password: values.pw,
          }),
        });
        const success = await result.json();
        const userNameExist = success?.message?.length;

        if (userNameExist) {
          toast.error('Benutzername bereits vergeben', {
            position: 'top-center',
            toastId: 'FormikErrors',
          });
        }

        if (success?.userId) {
          toast.success('Sie haben sich erfolgreich registriert', {
            position: 'top-center',
            autoClose: 3000, //3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            toastId: 'Register',
            transition: Slide,
          });
          setCreateSuccess(true);
        }
      } catch (error) {
        console.error(error, 'Error');
        toast.error('Beim Registrieren ist ein Fehler aufgetreten', {
          position: 'top-center',
          toastId: 'Register',
        });
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

  useEffect(() => {
    if (createSuccess) {
      const timer = setTimeout(() => {
        router.push('login');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [createSuccess, router]);

  return (
    <div className='flex w-full items-center flex-col'>
      <div onClick={() => router.push('/')} className='mb-4 cursor-pointer'>
        <NextImage src={'assets/kaduLogoTransparent.svg'} alt={''} height={70} width={70} />
      </div>
      <div className='max-w-[500px] border border-grey border-opacity-30 px-6 py-6 w-full md:rounded-lg md:drop-shadow-xl bg-white'>
        <div className='font-semibold text-22 mb-10'>
          Registrieren <div className='border-t border-grey mt-1.5' />{' '}
        </div>
        <form onSubmit={formik.handleSubmit} id='registerForm'>
          <div className='toast-container'>
            <ToastContainer limit={2} />
          </div>
          <div className='flex text-black flex-col gap-y-4'>
            <TextInput
              name='firstName'
              placeholder='Name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.userName}
              isValidating={false}
            />
            <TextInput
              name='lastName'
              placeholder='Nachname'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.pw}
              isValidating={false}
            />
            <TextInput
              name='email'
              placeholder='Email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.pw}
              isValidating={false}
            />
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
            {/* <TextInput
              name='pwRepeat'
              type='password'
              placeholder='Passwort wiederholen'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!pwFalse ? formik.errors.pw : ''}
              isValidating={false}
            /> */}
          </div>
          <div className='flex w-full justify-center mt-5 gap-x-2 mb-2'>
            <Button
              form='registerForm'
              onClick={() => setClicked(true)}
              className='w-full'
              type='submit'
              label={'Registrieren'}
            />
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
