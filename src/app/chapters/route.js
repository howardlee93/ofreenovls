import { PrismaClient } from "@prisma/client";
import {NextResponse} from 'next/server';

const prisma = new PrismaClient();

export const GET = async(req, res)=>{

}


export const POST = async(req, res)=>{ // add new chapter
    const { title, summary, workId, content} = await res.json()
    
    const newChapt = await prisma.chapter.create({
        title, 
        summary,
        content,
        work: {
            connect:{
                where: {id: workId}
            }
        }
    })
    return NextResponse.json(newChapt);
}


export const PUT = async(req, res)=>{
    
}


export const DELETE = async(req, res)=>{
    
}