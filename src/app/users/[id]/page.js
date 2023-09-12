import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import BookmarkDisplay from "@/app/bookmark/BookmarkDisplay";


const UserDashboard = async ({params})=>{
    const prisma = new PrismaClient();
    const {id} = params; 
    const user = await prisma.user.findUnique({
        where:{
            id: parseInt(id)
        },
        include:{
            works:true,
            bookmarks:{
                include:{
                    work:{
                        include:{
                            author:true
                        }
                    },
                }
            }
        }

    });
    console.log(user.bookmarks)
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
            {user.bookmarks.slice(0,5).map(b=>{
                return(
                    <BookmarkDisplay key={b.id} bookmark={b}/>
                )
            })}
        </>
    )
}

export default UserDashboard;