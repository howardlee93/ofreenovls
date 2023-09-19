'use client';
import { useAuth } from "@/app/_util/authContext";
const LogOut = ()=>{
    const { logout } = useAuth()

    const handleLogOut =()=>{
        sessionStorage.removeItem('userId');
        logout()
        alert('logged out!')
    }
    return(
        <>
        <p onClick={handleLogOut}>Log out</p>
        </>
    )
}

export default LogOut;
