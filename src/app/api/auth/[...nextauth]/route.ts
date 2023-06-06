import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const authOption =  {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const res = await fetch("http://localhost:3002/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: credentials?.username,
            password: credentials?.password,
          }),
        });
        const {token} = await res.json();

        if (token) {
          return token;
        } else {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/signIn",
    error: '/'
  },

};

const handler= NextAuth(authOption)

export {handler as POST, handler as GET}