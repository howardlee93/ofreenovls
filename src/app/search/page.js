
import { PrismaClient } from "@prisma/client";


const SearchResultPage = async({searchParams })=>{
    const prisma = new PrismaClient();
    const {searchTerm} = searchParams;

    // const result = await prisma.work.findMany({
    //     where:{
    //         body:{
    //             search: searchTerm
    //         }
    //     }
    // })
    // console.log(result)

    return(
        <>
        <h1>Search results</h1>
        {searchTerm}
        </>
    )

}

export default SearchResultPage;