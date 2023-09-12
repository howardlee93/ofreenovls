import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const WorkBookmarkPage = async({params}) =>{
    const {work} = params;
    const prisma = new PrismaClient();
    const workText = await prisma.work.findUnique({
        where:{id:parseInt(work)},
        include:{
            // chapters:{
            //     orderBy: {createdAt:'asc'} // want chapter to show in order of creation
            // },
            // author:true,
            // subject:true,
            // tag: true,
            bookmarks:{
                include:{
                    users:true
                }
            }
        }
    })

    return(
        <>
        {workText.bookmarks.map(bookmark=>{
            <p key={bookmark.key}>bookmark</p>
        })}
        </>
    )
}

export default WorkBookmarkPage;