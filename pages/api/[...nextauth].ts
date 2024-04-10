import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { authOptions } from "../../lib/auth"


export const { handlers, auth, signIn, signOut } = NextAuth(
    authOptions
)