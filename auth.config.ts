import Credentials from 'next-auth/providers/credentials';
import NextAuth, {NextAuthConfig} from 'next-auth';

export const BASE_PATH = '/api/auth';

export const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: {label: 'Username', type: 'text', placeholder: 'ismail'},
        password: {label: 'Password', type: 'password'},
      },
      authorize: async (credentials) => {
        const users = [
          {
            id: 'test-user-1',
            userName: 'test1',
            name: 'Test 1',
            password: 'test',
            email: 'test@test.at',
          },
          {
            id: 'test-user-2',
            userName: 'test2',
            name: 'Test 2',
            password: 'test',
            email: 'test@test.at',
          },
        ];
        const user = users.find(
          (user) => user.userName === credentials.username && user.password === credentials.password
        );
        return user ? {id: user.id, email: user.email, name: user.name} : null;
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.AUTH_SECRET,
};

export const {handlers, auth, signIn, signOut} = NextAuth(authOptions);
