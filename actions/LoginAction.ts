'use server';

import {signIn} from '@/auth';

export async function loginAction(userName: string, pw: string) {
  try {
    const session = await signIn('credentials', {
      redirect: false,
      userName: userName,
      password: pw,
    });
    return session;
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
}
