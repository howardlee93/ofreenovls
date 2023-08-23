'use client';
import { useAuth } from "@/app/_util/authContext";


const Register = ()=>{
    const {register} = useAuth();
     const handleSubmit = async(e)=>{
        e.preventDefault();
        const registerUserData = {
            name: e.target.name.value,
            email: e.target.email.value,
            role: 'USER'
        };
        const options = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerUserData)
        }
        const res = await fetch('/users', options)
        console.log(res);
        const user = await res.json();
        register(user);
        //use res to login session
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h1> Register as new user</h1>
            <label htmlFor="username">username:</label>
            <input type="text" name="username"/> 
            <label htmlFor="email">email:</label>
            <input type="email" name="email"/> 
            <button type="submit"> Register</button>
        </form>
    )
}
export default Register;