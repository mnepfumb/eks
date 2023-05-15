import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '../../../database/conn'
import Users from '../../../model/Schema'
import { compare } from 'bcryptjs';

export default NextAuth({
    providers : [
        CredentialsProvider({
            name : "Credentials",
            async authorize(credentials, req){
                connectMongo().catch(error => { error: "Connection Failed...!"})

                // check user existance
                const result = await Users.findOne( { email : credentials.email})
                console.log("result: " + result)

                if(!result){
                    throw new Error("No user Found with Email Please Sign Up...!")
                }

                // compare()
                const checkPassword = await compare(credentials.password, result.password);
                console.log("checkPassword: " + checkPassword)
                
                // incorrect password
                if(!checkPassword || result.email !== credentials.email){
                    throw new Error("Username or Password doesn't match");
                }

                return result;

            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    }
})