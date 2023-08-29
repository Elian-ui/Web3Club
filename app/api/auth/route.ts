
import { getServerSession } from 'next-auth/next'
import { NextResponse } from "next/server"
import GoogleProvider from 'next-auth/providers/google'
import { NextAuthOptions } from 'next-auth';

const authOptions: NextAuthOptions = {
    // Secret for Next-auth, without this JWT encryption/decryption won't work
    secret: process.env.NEXTAUTH_SECRET,

    // Configure one or more authentication providers

    // https://next-auth.js.org/configuration/providers/oauth
    providers: [

        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),

    ],
    callbacks: {
        async jwt({ token }) {
            token.userRole = "admin"
            return token
        },
    }
};
export const GET = async () => {
    const session = await getServerSession(authOptions)

    if (session) {
        NextResponse.json({
            content:
                "This is protected content. You can access this content because you are signed in.",
        })
    } else {
        NextResponse.json({
            error: "You must be signed in to view the protected content on this page.",
        })
    }
}