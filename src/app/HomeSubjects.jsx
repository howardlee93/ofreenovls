import { PrismaClient } from "@prisma/client";
import Link from 'next/link';
import styles from './home.module.css'

const HomeSubjects = async({className})=>{
    const prisma = new PrismaClient();
    const subjects = await prisma.subject.findMany({
        take:5,
        include:{
            _count:{
                select: {works:true}
            }
        }
    });

    // console.log(subjects)
    return(
        <div className={className}>
        <h1 className={styles.homeTitle}> Top subjects</h1>
        {subjects.map((subject)=>
            <Link key={subject.id} href={`/subjects/${subject.id}`} replace>{subject.name}</Link>
        )}
        </div>
    )
}

export default HomeSubjects;