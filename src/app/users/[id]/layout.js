'use client';
import { useAuth } from '@/app/_util/authContext';
import Link from 'next/link'

const UserLayout = ({children, params})=>{
    //this is where the sidebar should go 
    //have protected
    const {user} = useAuth(); 
    const {id} = params;
    const protectedView = user.id === Number(id)

    return(
        <>
            <aside role="sidebar" className=''>
                <li><Link href={`${id}/profile`} replace>Profile</Link></li>
                <li>Works</li>
                <li>Bookmarks</li>
                {protectedView ? 
                <li>Statistics</li>
                :
                ""
                }
            </aside>
            <div className='content-center'>
                {children}
            </div>
        </>
    )
}

export default UserLayout;