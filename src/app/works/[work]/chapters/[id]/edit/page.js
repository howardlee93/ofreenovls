import { PrismaClient } from "@prisma/client";
import EditChapterPageForm from "./EditChapterPageForm";

const EditChapterPage = async({params})=>{
    const prisma = new PrismaClient();
    const {id} =params;
    const chapter = await prisma.chapter.findUnique({
        where:{id}
    })

    return(

        <EditChapterPageForm chapter={chapter}/>
    )
}

export default EditChapterPage;
