import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // --- Mock User Check for Credential Login ---
        if (credentials.email === "admin@example.com" && credentials.password === "password") {
          return { id: "1", name: "Admin User", email: "admin@example.com", role: "admin" };
        }
        if (credentials.email === "user@example.com" && credentials.password === "password") {
          return { id: "2", name: "Regular User", email: "user@example.com", role: "user" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login', // Custom login page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};













