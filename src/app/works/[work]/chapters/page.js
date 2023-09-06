import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import WorkToolBar from "../WorkToolbar";

const EntireWorkPage = async({params}) =>{
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

    const warnings ={
        'none':'Decline to warn',
        'violence': 'Violence',
        'sex':'Sexual Content'
    };
    const ratings = {
        'pg':'PG',
        'pg13':'PG-13', 
        'm':'Mature', 
        'e':'Explicit'
    };
  
    return(
        <>
        <WorkToolBar multiC={null} params={work}/>
        <h1>{workText.title}</h1>
        <h2>{workText.summary}</h2>
        <p>by <Link href={`/users/${workText.authorId}`}>{workText.author.name}</Link></p>
        <p>Subjects:
        { workText.subject.map(sub=>
            <Link key={sub.id} href={`/subjects/${sub.id}`}>{sub.name}</Link>
        )} 
        </p>
        <p> Rated: {ratings[workText.rating]}</p>
        <p>Warning: {warnings[workText.warning]}</p>
        <p>Tags:
        { workText.tag.map(tag=>
            <Link key={tag.id} href={`/tags/${tag.id}`}>{tag.name}</Link>
        )}
        </p>
        {workText.chapters.map(chapt =>
            <div key={chapt.id} dangerouslySetInnerHTML={{__html: chapt.content}}/>
        )}
        </>
    )

}

export default EntireWorkPage;