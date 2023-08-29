
import { NextAuthOptions, Session } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google'


export interface MySession extends Session {
    user: {
        name: string | null;
        email: string | null;
        image: string | null;
        id: string | null; // Add the 'id' property here
        // Add other properties as needed
    };
    accessToken: any;
}

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
            return token;
        },
        async signIn({ user, account, profile, email, credentials }) {
            // console.log('Account:', account); // Log the account object
            // console.log('Profile:', profile); // Log the profile object
            // console.log('Email:', email); // Log the email
            if (account?.provider === 'google') {
                const googleUserId = account.id; // Google User ID
                const googleEmail = account.email; // Google Email
                // ... any other properties you need
            }
            const isAllowedToSignIn = true;
            if (isAllowedToSignIn) {
                return true;
            } else {
                // Return false to display a default error message
                return false;
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },


        async session({ session, token }) {
            const mysession = session as MySession
            mysession.user = {
                name: token.name ?? '',
                email: token.email ?? '',
                image: token.picture ?? '',
                id: token.sub ?? '',
            };

            // Include other properties to the session
            mysession.accessToken = token.accessToken;
            mysession.user.id = token.sub as string; // Using "sub" as an example, adjust as needed

            return session = mysession;
        },
    }

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
