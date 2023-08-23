
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

//register aka create user
export const POST = async(req, res)=>{
    const {email, username, role } =  await req.json();
    console.log(email, username, role );
    const newUser = await prisma.user.create({
        data: {
            name: username,
            email: email,
            profile: { // start with empty bio
                create: {bio:''}
            },
            role: role
        }
    })
    
    return NextResponse.json(newUser) // to be used for session login;
}

//delete user
export const DELETE = async(req, res)=>{
    const {email, username, role } =  await req.json();
    console.log(email, username, role );
    const deletedUser = await prisma.user.delete({
        where: {
            name: username,
            email: email,
        },
        select: {
            email: true,
            name: true,
          },
    })
    
    return NextResponse.json(deletedUser) // to be used for session login;
}