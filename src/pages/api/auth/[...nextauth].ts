import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your-email@example.com"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your-awesome-password"
        }
      },
      async authorize(credentials) {
        const user = { id: "1", email: "admin@admin.com", password: "admin" };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      }
    })
  ]
});
