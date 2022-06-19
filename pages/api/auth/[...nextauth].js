import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  url: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
  providers: [
    FacebookProvider({
        clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    }),
  ],
})