import { PrismaClient } from "@prisma/client";
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

    async function generateStaticParams() {
        const posts = await fetch('https://.../posts').then((res) => res.json())
       
        return posts.map((post) => ({
          slug: post.slug,
        }))
      }

    const multiC = workText.chapters.length > 1;
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
        <WorkToolBar multiC={multiC} params={work}/>
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
        <div dangerouslySetInnerHTML={{__html:workText.chapters[0].content}}/>
        </>
    )
}

export default WorkPage;