
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async(req,res)=>{ 

    const filter = await req.json(); // how to do with multiple filters
    const works = await prisma.work.findMany({
        where:{
            [filter]:filter
        }
    })
    return NextResponse.json(works);
};

export const POST = async(req,res)=>{
    const {title, summary, content, chapter,
        subject
    } = await req.json();
    const newWork = await prisma.work.create({
        data:{
            title,
            summary,
            content,
            chapter,
            subject
        }
    })
    return NextResponse.json(newWork)
}
export const PUT = async(req,res)=>{
    
}
export const DELETE = async(req,res)=>{
    
}

