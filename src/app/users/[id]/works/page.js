import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const UserWorks = async({params})=>{
    const {id} = params;
    const userWorks = await prisma.user.findUnique({
        where:{id: parseInt(id)},
        include:{
            works:true
        }
    })

    const {works} = userWorks;
    return(
        <>
        <h1>Works</h1>
        {works.map(work=>{
            <p key={work.id}><Link href={`/works/${work.id}`} replace>{work.title}</Link></p>
        })}
        </>
    )
}

export default UserWorks;