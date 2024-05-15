import {revalidatePath} from 'next/cache';
import {signIn} from '../auth.config';

type ActionState =
  | {
      state: 'VALIDATION_ERROR';
      errors: {
        email?: string[];
        password?: string[];
      };
      toast?: {
        title: string;
        message: string;
      };
    }
  | {
      state: 'ERROR';
      message: string;
      toast?: {
        title: string;
        message: string;
        retry: boolean;
      };
    }
  | {
      state: 'SUCCESS';
      toast?: {
        message: string;
      };
    }
  | undefined;

type Action = (formState: ActionState, userName?: string, pw?: string) => Promise<ActionState>;

const action: Action = async (_formState, userName?: string, pw?: string) => {
  'use server';

  try {
    await signIn('credentials', {
      redirect: false,
      userName: userName,
      pw: pw,
    });
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

  revalidatePath('/dashboard');

  return {
    state: 'SUCCESS',
  };
};

const LoginFormAction = {action};

export default LoginFormAction;
