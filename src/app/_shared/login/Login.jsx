'use client';

import {useState} from 'react';
import styles from './login.module.css';

import { useAuth } from "@/app/authContext";

const Login = ()=> {
    const {login} = useAuth();

    const [showLogin, setShowLogin] = useState(false);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit =async (event)=>{
        event.preventDefault();


        const data = {
            name: userName,
            email: email
          };
        console.log(data.name, data.email)
        const endpoint = '/auth/';
        const JSONdata = JSON.stringify(data);
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
              'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
          };
        const response = await fetch(endpoint, options);
        const result = await response.json();
        const user = result[0];
        console.log(user);
        login(user)
        alert('you have signed in');
    }
    
    return(
        <>
        <h1 onClick={()=>setShowLogin(!showLogin)}> Login</h1>
        {showLogin ? <form className={styles.menu}
        onSubmit={handleSubmit}
        >
            <input type="text" placeholder='username' defaultValue={userName} onChange={e=>setUserName(e.target.value)}/>
            <input type="email" placeholder='email' defaultValue={email} onChange={e=>setEmail(e.target.value)}/>
            <button type="submit">Sign in</button>
        </form>
        :
        <div/>
        }
        </>
    )
}

export default Login;