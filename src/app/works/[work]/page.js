import { PrismaClient } from "@prisma/client";
import WorkToolBar from "./WorkToolbar";
import Link from "next/link";
import WorkDisplayComponent from './WorkDisplayComponent';

const WorkPage = async ({params})=>{
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


    return(
        <>
        <WorkDisplayComponent workText={workText} work={work}/>
        </>
    )
}

export default WorkPage;