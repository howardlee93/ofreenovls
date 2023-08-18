'use client';
import { useAuth } from "@/app/authContext";
const LogOut = ()=>{
    const { logout } = useAuth()

    const handleLogOut =()=>{
        sessionStorage.removeItem('userId');
        logout()
        alert('logged out!')
    }
    return(
        <>
        <button onClick={handleLogOut}>Log out</button>
        </>
    )
}

export default LogOut;
