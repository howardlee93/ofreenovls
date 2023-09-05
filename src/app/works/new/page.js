'use client';
import { useAuth } from "@/app/_util/authContext";
import {useState} from 'react';
import Editor from "@/app/_shared/editor/Editor";
import { useRouter } from 'next/navigation'
import Form from "../form";


const PostWork = ()=>{
    const {user} = useAuth();
    const router = useRouter();
    const [content, setContent] = useState();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            author: user.id,
            // rating: e.target.rating.value,
            // warning: e.target.warning.value,
            subject: e.target.subject.value,
            title: e.target.title.value,
            summary: e.target.summary.value,
            chapter: content.join()
        }
        const options ={
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data)
        };

       fetch('/works/', options)
       .then(()=>router.replace(`/users/${user.id}`))
    }
    return(
        <div id='new'>  
            <h1>New Work</h1>
            <Form handleSubmit={handleSubmit} content={content} setContent={setContent} />
        </div>
    )

}

export default PostWork;
