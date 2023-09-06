import { PrismaClient } from "@prisma/client";
import {NextResponse} from 'next/server';

const prisma = new PrismaClient();

export const GET = async(req, res)=>{

}


export const POST = async(req, res)=>{ // add new chapter
    const { title, summary, workId, content} = await req.json()
    
    const newChapt = await prisma.chapter.create({
        data:{
            title, 
            summary,
            content,
            work: {
                connect:{
                    id: parseInt(workId)
                }
            }
        },
    })
    return NextResponse.json(newChapt);
}


export const PUT = async(req, res)=>{
    const { title, summary, workId, content, id} = await req.json()
    console.log(typeof id);
    const updatedChapt = await prisma.chapter.update({
        where:{
            id,
            // workId: parseInt(workId)
        },
        data:{  
            title, 
            summary,
            content,
        }
    })
    return NextResponse.json(updatedChapt);
}


export const DELETE = async(req, res)=>{
    const {id} = await req.json();
    
    const deletedChapt = await prisma.chapter.delete({
        where:{
            id
        },
    })

    return NextResponse.json(deletedChapt);
}