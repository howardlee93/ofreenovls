import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const PUT = async(req, res)=>{
    const {userId, bio} = await req.json();
    const newProfile = await prisma.profile.update({
        where:{
            userId: parseInt(userId)
        },
        data:{
            bio
        }
    });
    return NextResponse.json(newProfile);
}
