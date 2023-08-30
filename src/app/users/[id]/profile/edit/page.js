'use client';
import {useState, useEffect} from 'react';
import Editor from '@/app/_shared/editor/Editor';

const EditProfile = ({params})=>{

    const [content, setContent] = useState('')
    //get bio from prev param
    const {id} = params; //user

    useEffect(()=>{
        fetch(`/profile/${id}`)// find by userId
        .then(res => res.json())
        .then(r => setContent(r.bio))
    },[])

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            userId: id,
            bio: content
        }
        const JSONdata = JSON.stringify(data);
        console.log(JSONdata);

        const options = {
            // The method is put because we are sending data.
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
        setContent(res.bio);
    }

    return(
        <>
        {content ? 
        <form onSubmit={handleSubmit}>
            <h1>Edit Profile</h1>

            <div name='bio'>
            <Editor content={content}
                setContent={setContent}
            />
            </div>
            <button type="submit">update</button>
        </form>
        :
        ''
        }
        </>
    )
}

export default EditProfile;