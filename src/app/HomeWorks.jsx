import { PrismaClient } from "@prisma/client";
import Link from 'next/link';

const HomeWorks = async({className})=>{
    const prisma = new PrismaClient();
    const fiveworks = await prisma.work.findMany({
        take:5,
        include:{
            author:true
        }
    })

    return(
        <div className={className}>
        <h1>Recent works</h1>
        {fiveworks.map(work =>
            <p key={work.id}>
            <Link href={`/works/${work.id}`} replace>{work.title} </Link>
            by {' '} 
            <Link href={`/users/${work.authorId}`} replace>{work.author.name}</Link>
         </p>
            )
        }
        </div>
    )

}

export default HomeWorks