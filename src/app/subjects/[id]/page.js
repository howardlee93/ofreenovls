import { PrismaClient } from "@prisma/client";
import Link from 'next/link';

const SubjectIdPage = async({params}) =>{
    const {id} = params;
    const prisma = new PrismaClient();
    const subject = await prisma.subject.findUnique({
        where:{id: parseInt(id)},
        include:{
            works:true
        }
    })
    const {works} = subject;

    return(
        <>
            <h1>{subject.name}</h1>
            {works.map(work =>
                <Link href={`/works/${work.id}`} key={work.id} replace>{work.title}</Link>
            )}
        </>
    )
}

export default SubjectIdPage;