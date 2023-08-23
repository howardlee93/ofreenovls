'use client';

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const AuthContext = createContext({});

export const AuthProvider = ({children})=>{
    const router = useRouter();
    const [user, setUser] = useState({});
    useEffect(()=>{
        const getSessionId = async()=>{
            const id = sessionStorage.getItem('userId');
            if (id){
                setUser(id);
            }
        }
        getSessionId();
    },[]);

    const register = (id)=>{
        if (user) setUser({});
        sessionStorage.setItem('userId', JSON.stringify(id));
        setUser(id);
        router.push('/');
    };

    const login = (id) =>{
        setUser(id);
        sessionStorage.setItem('userId', JSON.stringify(id));
    };

    const logout =()=>{
        setUser({});
    }

    const checkAuthSuccess = () =>{
        if (user && Object.values(user).length > 0) return true;
        return false;
    }

    return (
        <AuthContext.Provider value={{user, register, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
