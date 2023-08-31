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
            posts:true
        }

    });

    return(
        <>
            <h1>{user.name}!</h1>
            <h2>Works</h2>
            {user.posts.slice(5).map(post=>{
                return(
                    <p key={post.id}><Link  href={`/works/${post.id}`}>{post.title}</Link></p>
                )
            })}
            <h2>Bookmarks</h2>
        </>
    )
}

export default UserDashboard;