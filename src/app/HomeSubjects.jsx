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
            <div key={subject.id}>
                <Link href={`/subjects/${subject.id}`} replace> <h1>{subject.name}</h1></Link>
                <p>{subject._count.works} works</p>

            </div>
        )}
        </div>
    )
}

export default HomeSubjects;