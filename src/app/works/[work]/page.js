import { Prisma, PrismaClient } from "@prisma/client";
import WorkToolBar from "./WorkToolbar";
import Link from "next/link";

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
    const multiC = workText.chapters.length > 1;
    return(
        <>
        <WorkToolBar multiC={multiC}/>
        <h1>{workText.title}</h1>
        <h2>{workText.summary}</h2>
        <p>by <Link href={`/users/${workText.authorId}`}>{workText.author.name}</Link></p>
        <p>Subject: {workText.subject[0].name}</p>
        <div dangerouslySetInnerHTML={{__html:workText.chapters[0].content}}/>
        </>
    )
}

export default WorkPage;