'use client';
import { useAuth } from '@/app/_util/authContext';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const UserLayout = ({children, params})=>{
    //this is where the sidebar should go 
    //have protected
    const pathname = usePathname();
    const {user} = useAuth(); 
    const {id} = params;
    const protectedView = user.id === Number(id)

    return(
        <>
            <aside role="sidebar">
                <li><Link href={`${pathname}/profile`} replace>Profile</Link></li>
                <li>Works</li>
                <li>Bookmarks</li>
                {protectedView ? 
                <li>Statistics</li>
                :
                ""
                }
            </aside>
        {children}
        </>
    )
}

export default UserLayout;