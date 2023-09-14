import { PrismaClient } from "@prisma/client";
import Link from 'next/link';

const HomeWorks = async({className})=>{
    const prisma = new PrismaClient();
    const fiveworks = await prisma.work.findMany({
        take:5
    })

    return(
        <div className={className}>
        <h1>Recent works</h1>
        {fiveworks.map(work =>
            <p key={work.id}>{work.title}</p>
            )
        }
        </div>
    )

}

export default HomeWorks