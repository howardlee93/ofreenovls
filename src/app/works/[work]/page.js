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
            subject:true,
            tag: true
        }
    })
    const multiC = workText.chapters.length > 1;
    const subNames = workText.subject.map(sub => sub.name).join(',');
    const tagNames =  workText.tag.map(t => t.name).join(',');
    // const names = workText.subject.reduce((acc, val) => acc +','+val )

    return(
        <>
        <WorkToolBar multiC={multiC} params={work}/>
        <h1>{workText.title}</h1>
        <h2>{workText.summary}</h2>
        <p>by <Link href={`/users/${workText.authorId}`}>{workText.author.name}</Link></p>
        <p>Subjects:
        { workText.subject.map(sub=>
            <Link key={sub.id} href={`/subjects/${sub.id}`}>{sub.name}</Link>
        )} 
        </p>
        <p>Tags:
        { workText.tag.map(tag=>
            <Link key={tag.id} href={`/tags/${tag.id}`}>{tag.name}</Link>
        )}
        </p>
        <div dangerouslySetInnerHTML={{__html:workText.chapters[0].content}}/>
        </>
    )
}

export default WorkPage;