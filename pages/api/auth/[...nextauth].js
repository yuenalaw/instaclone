import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  /**
   * custom
   * theme: {
   *    logo: "https://links.papareact/com/sq0",
   *    brandColor: "#f13287",
   *    colorScheme: "auto",
   * }
   */

  pages: {
      signIn: "/auth/signin", //be aware, one is camel case, the other is not!
  }
});