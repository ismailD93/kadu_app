import NextAuth from 'next-auth';
import type {NextAuthConfig} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {NEXTAUTH_SECRET} from './config';
import {NextResponse} from 'next/server';
import {getUser} from './fetchMethods/getUser';

import {getLoginData} from './fetchMethods/getLoginData';
import {User} from './constants/types';

export const authOptions = {
  basePath: '/api/auth',
  trustHost: true,
  secret: NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },

  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        userName: {label: 'Benutzername', type: 'text'},
        password: {label: 'Password', type: 'password'},
      },
      type: 'credentials',
      authorize: async (credentials, req) => {
        if (!credentials?.userName || !credentials.password) {
          return null;
        }
        const loginUserName = credentials.userName as string;
        const password = credentials.password as string;

        try {
          const login: User = await getLoginData(loginUserName, password);

          if (!login) return null;
          return {
            email: login.email,
            id: login.userId,
            name: login.userName,
          };
        } catch (error) {
          console.error('An error occurred during login:', error);
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;

export const {handlers, auth, signIn, signOut} = NextAuth(authOptions);
