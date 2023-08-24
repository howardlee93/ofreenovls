'use client';
import {useState, useEffect} from 'react';

const EditProfile = ({params})=>{

    const [bio, setBio] = useState('')
    //get bio from prev param
    const {id} = params; //user

    useEffect(()=>{
        fetch(`/profile/${id}`)// find by userId
        .then(res => res.json())
        .then(r => setBio(r.bio))
    },[])

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            userId: id,
            bio: bio
        }
        console.log(data);
        const JSONdata = JSON.stringify(data);
        const options = {
            // The method is POST because we are sending data.
            method: 'PUT',
            // Tell the server we're sending JSON.
            headers: {
              'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
          };
        const response= await fetch('/profile', options);
        const res = await response.json();
        setBio(res.bio);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Edit Profile</h1>
            <textarea name="bio" placeholder="bio" value={bio} 
            onChange={e=>setBio(e.target.value)}
            />
            <button type="submit">update</button>
        </form>
    )
}

export default EditProfile;