'use client';

import {useState} from 'react';
import styles from './login.module.css';
import { useAuth } from "@/app/_util/authContext";
import { useRef, useEffect } from 'react';

const Login = ()=> {
    const {login} = useAuth();

    const [showLogin, setShowLogin] = useState(false);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const inputReference = useRef(null);

    const handleClick = ()=>{
      setShowLogin(!showLogin)
      // inputReference.current.focus();
    }

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
        const user = await response.json();
        // const user = result[0];
        console.log(user.id);
        login(user)
        // alert('you have signed in');
    }
    
    return(
        <>
        <p onClick={handleClick}> Login</p>
        {showLogin ?
         <form className={styles.menu} ref={inputReference}
          onSubmit={handleSubmit}
          >
            <input type="text" placeholder='username' defaultValue={userName} onChange={e=>setUserName(e.target.value)}/>
            <input type="email" placeholder='email' defaultValue={email} onChange={e=>setEmail(e.target.value)}/>
            <button type="submit">Sign in</button>
        </form>
        :
        ''
        }
        </>
    )
}

export default Login;