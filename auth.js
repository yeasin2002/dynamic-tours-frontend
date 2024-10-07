import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginHandler } from "./app/libs/authenticate";
// Your own logic for dealing with plaintext password strings; be careful!

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        console.log(credentials);
        // logic to salt and hash password
        const res = await loginHandler(credentials.email, credentials.password);
        if (res.status === "success")
          user = { name: "Sabbir", role: "admin", title: "okay" };
        // logic to verify if the user exists

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
});
