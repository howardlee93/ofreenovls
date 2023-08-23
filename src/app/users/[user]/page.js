'use client'
import { useAuth } from '@/app/_util/authContext';

const UserDashboard = ()=>{
    const {user} = useAuth();
    return(
        <>
        {user? 
        <>
            <h1> user dashboard: Hello {user.name}!</h1>
            <aside role="sidebar">
            <li><a href="/profile">Profile</a></li>
            
            </aside>
        </>
        :
        ""
        }
        </>
    )
}

export default UserDashboard;