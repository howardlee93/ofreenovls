// 'use client'
// import { useAuth } from '@/app/_util/authContext';
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
import { PrismaClient } from "@prisma/client";

const UserDashboard = async ({params})=>{
    const prisma = new PrismaClient();
    const {id} = params; // or from 
    const user = await prisma.user.findUnique({
        where:{
            id: parseInt(id)
        }
    });

    return(
        <>
            <h1>{user.name}!</h1>
            <h2>Works</h2>
            <h2>Bookmarks</h2>
        </>
    )
}

export default UserDashboard;