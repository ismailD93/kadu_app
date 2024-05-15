import NextAuth from 'next-auth';
import {authOptions} from './auth.config';

export const {handlers, auth} = NextAuth({
  session: {strategy: 'jwt'},
  ...authOptions,
});
