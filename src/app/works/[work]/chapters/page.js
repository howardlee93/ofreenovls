import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import WorkToolBar from "../WorkToolbar";

const EntireWorkPage = async({params}) =>{
    const {work} = params;
    const prisma = new PrismaClient();
    const workText = await prisma.work.findUnique({
        where:{id:parseInt(work)},
        include:{
            chapters:true,
            author:true,
            subject:true,
            tag: true
        }
    })

    const warnings ={
        'none':'Decline to warn',
        'violence': 'Violence',
        'sex':'Sexual Content'
    };
    const ratings = {
        'pg':'PG',
        'pg13':'PG-13', 
        'm':'Mature', 
        'e':'Explicit'
    };
  
    return(
        <>
        {workText.chapters.map(chapt =>
            <div key={chapt.id} dangerouslySetInnerHTML={{__html: chapt.content}}/>
        )}
        </>
    )

}

export default EntireWorkPage;