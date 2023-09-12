import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async(req,res)=>{

}


export const POST = async(req,res)=>{
    const {userId, workId, note} = await req.json();
    const newComment = await prisma.comment.create({
        data:{
            note,
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
    return NextResponse.json(newComment);
}

export const PUT = async(req,res)=>{
    const {id, note} = await req.json();
    const updatedComment = await prisma.comment.update({
        where:{id:parseInt(id)},
        data:{
            note
        },
        include:{
            user:true,
            work: true
        }
    })
    return NextResponse.json(updatedComment);
}

export const DELETE = async(req,res)=>{
    const {id} = await req.json();

    const deletedComment = await prisma.comment.delete({
        where:{
            id: parseInt(id)
        }
    })
    return NextResponse.json(deletedComment);
}