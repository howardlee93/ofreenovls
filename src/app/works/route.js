
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async(req,res)=>{ 

    // req = await req.json(); // how to do with multiple filters
    console.log(req)
    // const works = await prisma.work.findMany({
    //     where:{
    //         [filter]:filter
    //     }
    // })
    // return NextResponse.json(works);
};

export const POST = async(req,res)=>{
    const {title, summary, chapter,
        subject, author
    } = await req.json();

    const newWork = await prisma.work.create({
        data:{
            title,
            summary,
            chapters:{create:[
                {content:chapter}
            ]},
            subject:{
                connectOrCreate:{ // check if subject exists first
                    where:{
                        name: subject
                    },
                    create: {
                        name:subject
                    }
                }
            },
            author: {connect: {id: parseInt(author)}}
        }
    })
    return NextResponse.json(newWork)
}

export const PUT = async(req,res)=>{
    
}
export const DELETE = async(req,res)=>{
    
}

