import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "google") {
        console.log(profile);

        // check if user have an account using thi  s email or apiKey

        // if user don't have an account create new one

        // if user already have an account login using that account

        // return profile.email_verified && profile.email.endsWith("@example.com");
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});
