import { PrismaClient } from "@prisma/client";
import EditChapterPageForm from "./EditChapterPageForm";

const EditChapterPage = async({params})=>{
    const prisma = new PrismaClient();


    return(
        <EditChapterPageForm/>
    )
}

export default EditChapterPage;
