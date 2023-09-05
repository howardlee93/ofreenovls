import { PrismaClient } from "@prisma/client";
import Link from 'next/link';

const TagPage = async ({params})=>{
    const prisma = new PrismaClient();
    const {id} = params;
    const tag = await prisma.tag.findUnique({
        where: {id: parseInt(id)},
        include:{
            works:true
        }
    })
    const {works} = tag;

    return(
        <>
            <h1>{tag.name}</h1>
            {works.map(work =>
                <p key={work.id}><Link href={`/works/${work.id}`} replace>{work.title}</Link></p>
            )}
        </>
    )

}

export default TagPage;