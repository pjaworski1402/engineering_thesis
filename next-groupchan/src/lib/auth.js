import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        // Zapisz odpowiednią wartość z obiektu user w tokenie JWT
        token.accessToken = user.accessToken;
        // Dodaj inne potrzebne informacje do tokenu JWT
        // ...
      }
      return token;
    },
    async session(session, token) {
      session.accessToken = token.accessToken;
      // Dodaj inne potrzebne informacje do sesji
      // ...
      return session;
    },
  },
});