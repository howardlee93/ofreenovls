import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

//login 
export const POST = async(req, res) =>{
    const {username, email} = await req.json();
    const user = await prisma.user.findUnique({
        where:{
            name: username,
            email: email
        }
    })
    //try
    return NextResponse.json(user);
}


