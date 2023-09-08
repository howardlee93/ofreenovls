
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
        subject, author, tags, rating, warning
    } = await req.json();
    const subjectNames = subject//.split(',');
    const newWork = await prisma.work.create({
        data:{
            title,
            summary,
            rating,
            warning,
            chapters:{
                create:[
                    {content:chapter}
                ]
            },
            subject:{
                connectOrCreate: subjectNames.map(subname =>{ 
                    return{// check if subject exists first
                        where:{ name: subname},
                        create: {name:subname}
                    }
                })
            },
            tag:{
                connectOrCreate: tags.map(t =>{ 
                    return{// check if subject exists first
                        where:{ name: t},
                        create: {name:t}
                    }
                })
            },
            author: {connect: {id: parseInt(author)}}
        }
    })
    return NextResponse.json(newWork)
}

export const PUT = async(req, res)=>{
    const {title, summary, chapter, chaptContent, subject, id, tags, rating, warning } = await req.json();
    const subjectnames = subject//.split(',');
    const editedWork = await prisma.work.update({
            where: {id :parseInt(id)},
            data:{
                title, 
                summary,
                rating,
                warning,
                subject:{
                    set: [],
                    connectOrCreate: subjectnames.map((subname) =>{ 
                        console.log(subname)
                        return{// check if subject exists first
                            where:{ name: subname},
                            create: {name: subname}
                        }
                    })
                },
                tag:{
                    set:[],
                    connectOrCreate: tags.map((t) =>{ 
                        return{// check if subject exists first
                            where:{ name: t},
                            create: {name: t}
                        }
                    })
                },
                chapters:{
                    update:{
                        where:{id: chapter}, // first chapter only
                        data:{content: chaptContent}
                    }
                }
            },
            include:{
                subject:true,
                chapters: true
            }
    })
    return NextResponse.json(editedWork);
};


export const DELETE = async(req,res)=>{
    
}

