'use client'
import { useAuth } from '@/app/_util/authContext';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const UserDashboard = ()=>{
    const {user} = useAuth();
    const pathname = usePathname()

    return(
        <>
        {user? 
        <>
            <h1> user dashboard: Hello {user.name}!</h1>
            <aside role="sidebar">
                <li><Link href={`${pathname}/profile`}>Profile</Link></li>
                <li>Works</li>
                <li>Bookmarks</li>
            </aside>
        </>
        :
        ""
        }
        </>
    )
}

export default UserDashboard;