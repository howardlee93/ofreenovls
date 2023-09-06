import { PrismaClient } from "@prisma/client";


// async function generateStaticParams() {
//     const posts = await fetch('https://.../posts').then((res) => res.json())
   
//     return posts.map((post) => ({
//       slug: post.slug,
//     }))
//   }
const WorkChapterPage = async({params})=>{
    const {work, id} = params;
    const prisma = new PrismaClient();
    const chapter = await prisma.chapter.findUnique({
        where:{workId: parseInt(work)}
    })
    return(
        <>
            <h2>{chapter.title}</h2>
            <p>{chapter.summary}</p>
            <div dangerouslySetInnerHTML={{__html:chapter.content}}/>
        </>
    )
}
export default WorkChapterPage;