import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const WorkBookmarkPage = async({params}) =>{
    const {work} = params;
    const prisma = new PrismaClient();
    const workText = await prisma.work.findUnique({
        where:{id:parseInt(work)},
        include:{
            bookmarks:{
                include:{
                    user:true
                }
            }
        }
    })
    console.log(workText.bookmarks)
    return(
        <>
        <h1> {workText.title} bookmarked by:</h1>
        {workText.bookmarks.map(bookmark=>
            <p key={bookmark.id}>
            <Link href={`/users/${bookmark.userId}`}>
            {bookmark.user.name}
            </Link>
            </p>
        )}
        </>
    )
}

export default WorkBookmarkPage;