'use client';
import {useState, useEffect, memo} from 'react';
import Editor from '@/app/_shared/editor/Editor';
import { useRouter } from 'next/navigation';

const EditProfileForm = props =>{
    const router = useRouter();
    const [content, setContent] = useState()
    
    useEffect(()=>{
        console.log(props.profile)
        setContent(props.profile.bio)
    },[props.profile])

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            userId: props.profile.userId,
            bio: content.join('')
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
        // const response= await fetch('/profile', options)
        // const res = await response.json();
        // console.log(res)
        // setContent(res.bio);
        fetch('/profile', options)
        .then(response => response.json())
        .then(res => setContent(res.bio))
        .then(()=> router.refresh())
        .then(() =>router.push(`/users/${props.profile.userId}/profile`))
        //probably would want to redirect to profile
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
export default memo(EditProfileForm);
