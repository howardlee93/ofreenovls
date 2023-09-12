'use client';//for authcontext
import { useAuth } from '@/app/_util/authContext';
import Link from 'next/link';
import styles from './layout.module.css';


const UserLayout = ({children, params})=>{
    //this is where the sidebar should go 
    //have protectedview
    const {user} = useAuth(); 
    const {id} = params;
    const protectedView = user.id === Number(id)

    return(
        <div className={styles.container}>
            <aside role="sidebar" className={styles.sidebar}>
                <ul>
                <li><Link href={`/users/${id}`} replace> Dashboard</Link></li>
                <li><Link href={`/users/${id}/profile`} replace>Profile</Link></li>
                <li><Link href={`/users/${id}/works`} replace>Works</Link></li>
                <li><Link href={`/users/${id}/bookmarks`} replace>Bookmarks</Link></li>
                {protectedView ? 
                <li>Statistics</li>
                :
                ""
                }
                </ul>
            </aside>
            <main className={styles.content}>
                {children}
            </main>
        </div>
    )
}

export default UserLayout;