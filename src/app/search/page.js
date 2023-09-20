
import { PrismaClient } from "@prisma/client";
import WorkCard from "../_shared/cards/WorkCard";

const SearchResultPage = async({searchParams })=>{
    const prisma = new PrismaClient();
    const {searchTerm} = searchParams;

    const result = await prisma.work.findMany({
        where:{
            summary:{
                contains: searchTerm
            },
            // tag: {
                //name:{}
            //     has: searchTerm,
            // },
            // bookmarks:{
                //name:{}
            //     has: searchTerm
            // }
        },
        include:{
            author:true,
            subject:true,
            tag: true
        }
    })

    console.log(result)

    return(
        <>
        <h1>Search results</h1>
        {result.map(r =>
            <WorkCard key={r.id} work={r}/>
        )}
        </>
    )

}

export default SearchResultPage;