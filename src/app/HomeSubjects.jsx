import { PrismaClient } from "@prisma/client";
import Link from 'next/link';

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
        <h1> Top subjects</h1>
        {subjects.map((subject)=>
            <Link key={subject.id} href={`/subjects/${subject.id}`} replace> <h2>{subject.name}</h2></Link>
        )}
        </div>
    )
}

export default HomeSubjects;