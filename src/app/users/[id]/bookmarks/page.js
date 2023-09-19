import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import BookmarkDisplay from "@/app/bookmark/BookmarkDisplay";


const UserBookmarksPage = async({params})=>{
    const prisma = new PrismaClient();
    const {id} = params; 
    const user = await prisma.user.findUnique({
        where:{
            id: parseInt(id)
        },
        include:{
            bookmarks:{
                include:{
                    work:{
                        include:{
                            author:true,
                            tag:true,
                            subject:true
                        }
                    }
                }
            }
        }

    });
    return(
        <>
        <h1> Bookmarks</h1>

        {user.bookmarks.map(b=>{
            return(
                <BookmarkDisplay key={b.id} bookmark={b}/>
            )
        })}
        </>
    )
}

export default UserBookmarksPage;