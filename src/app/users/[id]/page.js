import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import BookmarkDisplay from "@/app/bookmark/BookmarkDisplay";
import styles from './layout.module.css'

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
                            author:true,
                            tag:true,
                            subject:true
                        }
                    },
                }
            }
        }

    });
    return(
        <>
            <h1>{user.name}!</h1>
            <article className={styles.display}>
            <h2 className={styles.userHeader}>Works</h2>
            {user.works.slice(0,5).map(work=>{
                return(
                    <p key={work.id}><Link href={`/works/${work.id}`}>{work.title}</Link></p>
                )
            })}
            </article>

            <article className={styles.display}>
            <h2 className={styles.userHeader}>Bookmarks</h2>
            {user.bookmarks.slice(0,5).map(b=>{
                return(
                    <BookmarkDisplay key={b.id} bookmark={b}/>
                )
            })}
            </article>
        </>
    )
}

export default UserDashboard;