import { PrismaClient } from "@prisma/client";
import Link from 'next/link';

const SubjectPage = async()=>{
    const prisma = new PrismaClient();
    const subjects = await prisma.subject.findMany({
        include:{
            _count:{
                select: {works:true}
            }
        }
    });

    console.log(subjects)

    return(
        <>
        {subjects.map((subject)=>
            <div key={subject.id}>
                <Link href={`/subjects/${subject.id}`} replace> <h1>{subject.name}</h1></Link>
                <p>{subject._count.works} works</p>

            </div>
        )}
        </>
    )
}

export default SubjectPage;