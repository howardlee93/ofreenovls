import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async(req, res)=>{

}


export const POST = async(req, res)=>{
    const {userId, workId} = await req.json();

    const newBookmark = await prisma.bookmark.create({
        data:{
            user:{
                connect:{
                    id:parseInt(userId)
                }
            },
            work:{
                connect:{
                    id: parseInt(workId)
                }
            }
        },
        include:{
            user:true,
            work: true
        }
    })
    return NextResponse.json(newBookmark);
}


export const PUT = async(req, res)=>{
    
}


export const DELETE = async(req, res)=>{
    const {id} = await req.json();

    const deletedBookmark = await prisma.bookmark.delete({
        where:{
            id: parseInt(id)
        }
    })
    return NextResponse.json(deletedBookmark);
}