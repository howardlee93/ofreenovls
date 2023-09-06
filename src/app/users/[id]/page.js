import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const UserDashboard = async ({params})=>{
    const prisma = new PrismaClient();
    const {id} = params; 
    const user = await prisma.user.findUnique({
        where:{
            id: parseInt(id)
        },
        include:{
            works:true
        }

    });

    return(
        <>
            <h1>{user.name}!</h1>
            <h2>Works</h2>
            {user.works.slice(0,5).map(work=>{
                return(
                    <p key={work.id}><Link href={`/works/${work.id}`}>{work.title}</Link></p>
                )
            })}
            <h2>Bookmarks</h2>
       
        </>
    )
}

export default UserDashboard;