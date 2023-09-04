
import { PrismaClient } from "@prisma/client";
import {NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async(req, res)=>{ 
    const query = req.nextUrl.searchParams; // how to do with multiple filters
    console.log(query)
    const id = parseInt(query.get('id'));
    const subject = query.get('subject') || null;
    const tags = query.get('tags') || null;
    const works = await prisma.work.findMany({
        where:{
            id,
            // subject,
            // tags
        }
    });
    return NextResponse.json(works);
};

export const POST = async(req, res)=>{
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
    const {title, summary, chapter,
        subject, id
    } = await req.json();
    console.log(subject);
    // const editedWork = await prisma.update({
    //     where: {id},
    //     data:{
    //         title, 
    //         summary,
    //         // chapters:{
    //         //     update:{
    //         //         where:{chapter},
    //         //         data:{chapter}
    //         //     }
    //         // },
    //         // subject
    //     }
    // })
    
}
export const DELETE = async(req,res)=>{
    
}

