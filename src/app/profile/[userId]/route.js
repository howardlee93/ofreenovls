import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async(req, {params})=>{
    const userId =  params.userId;
    console.log(userId)
    const profileInfo = await prisma.profile.findUnique({
        where: {userId: parseInt(userId)}
    })
    return NextResponse.json(profileInfo);

}