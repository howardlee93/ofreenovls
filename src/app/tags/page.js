import { PrismaClient } from "@prisma/client";
import Link from 'next/link';

const TagsPage = async()=>{
    const prisma = new PrismaClient();
    const tags = await prisma.tag.findMany({
        include:{
            _count:{
                select: {works:true}
            }
        }
    })

    return(
        <>
            {tags.map(tag =>
                <div key={tag.id}>
                    <Link href={`/tags/${tag.id}`}> {tag.name}</Link>
                    <p>{tag._count.works} works</p>
                </div>
            )}
        </>
    )


}
export default TagsPage;