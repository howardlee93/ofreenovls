import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const UserWorks = async({params})=>{
    const {id} = params;
    const prisma = new PrismaClient();
    const userWorks = await prisma.user.findUnique({
        where:{id: parseInt(id)},
        include:{
            works:true
        }
    })

    const {works} = userWorks;
    console.log(works)
    return(
        <>
        <h1>Works</h1>
        {works.map(work=>{
            return(
            <p key={work.id}><Link href={`/works/${work.id}`} replace>{work.title}</Link></p>
            )
        })}
        </>
    )
}

export default UserWorks;