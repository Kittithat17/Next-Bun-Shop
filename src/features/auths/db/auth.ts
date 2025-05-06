import { db } from "@/lib/db";
import { signupschema } from "../schemas/auth";
import {hash,genSalt } from "bcrypt";
import { SignJWT } from 'jose';
import { cookies } from "next/headers";

interface SignupInput {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const generateJwtToken = async (userId: string) => {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY)
       return  await new SignJWT({id :userId})
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('30d')
        .sign(secret)
}

const setcookie = async (token: string) => {
    const cookieStore = await cookies();
    cookieStore.set('token',token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30, // 30 days
    })
}


export const signup = async (input: SignupInput) => {
    try{
      const {success,data,error} =  signupschema.safeParse(input);
        if(!success){
            return {
                message: 'Please fill in all fields correctly',
                error: error.flatten().fieldErrors,
            }
        }

      const user =  await db.user.findUnique({
            where:{
                email: data.email,
            }
        })

        if (user){
            return {
                message: 'Email already exists',
            
            }
        }
const salt = await genSalt(10);
const hashedPassword = await hash(data.password, salt);
        const newUser = await db.user.create({
            data:{
                name: data.name,
                email: data.email,
                password: hashedPassword,
            }
        })
        
        const token = await generateJwtToken(newUser.id)
        await setcookie(token)


    }catch (error){
        console.error('Error during signup:', error);
        return{
            message: 'An error occurred during signup. Please try again later.',
        }

    }
}