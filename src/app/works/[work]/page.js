import { Prisma, PrismaClient } from "@prisma/client";


const WorkPage = async ({params})=>{
    const {work} = params;
    const prisma = new PrismaClient();
    const workText = await prisma.work.findUnique({
        where:{id:parseInt(work)},
        include:{
            chapters:true,
            author:true,
            subject:true
        }
    })
    return(
        <>
        <h1>{workText.title}</h1>
        <h2>{workText.summary}</h2>
        <p>by {workText.author.name}</p>
        <p>Subject: {workText.subject.name}</p>
        <div dangerouslySetInnerHTML={{__html:workText.chapters[0].content}}/>
        </>
    )
}

export default WorkPage;