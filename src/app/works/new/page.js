'use client';
import { useAuth } from "@/app/_util/authContext";
import {useState} from 'react';
import Editor from "@/app/_shared/editor/Editor";
const PostWork = ()=>{
    const {user} = useAuth();

    const [content, setContent] = useState();

    const handleSubmit = e=>{
        e.preventDefault();
        const data = {
            user: user.id,
            // rating: e.target.rating.value,
            // warning: e.target.warning.value,
            subject: e.target.subject.value,
            title: e.target.title.value,
            summary: e.target.summary.value,
            content: e.target.content.value
        }
        console.log(data);
    }
    return(
        <>  
            <h1>New Work</h1>
            <form onSubmit={handleSubmit}>
            <div className='tag-checkbox'>
                <label htmlFor="rating">Rating:</label>
                <select name="rating" id="rating">
                    <option value='pg'>PG </option>
                    <option value='pg13'>PG-13</option>
                    <option value='m'>Mature</option>
                    <option value='e'>Explicit</option>
                </select>

                <br></br>

                <label htmlFor='warning'>Warning:</label>
                <span/>
                <label htmlFor='none'>Decline to warn</label>
                <input type="radio" name="none"/> 
                <label htmlFor='none'>Violence</label>
                <input type="radio" name="none"/> 
                <label htmlFor='none'>Sex</label>
                <input type="radio" name="none"/> 
                <br/>
                
                <input type='text' name="subject" placeholder="subject"/>
                <br/>

                <input type='text' name="tags" placeholder="tags"/>
                <br/>

                <label htmlFor='tags'>Multi-chaptered?:</label>
                <input type='checkbox' name="chapters"/>
                <br/>

                <input type='text' name="title" placeholder="title"/>
                <br/>

                <Editor setContent={setContent} content={content}/>

                
                <textarea name="summary" placeholder='summary'/>
                <br/>

                <textarea name="content" placeholder='content'/>
                <br/>

            </div>
            <button submit="submit">Preview</button>
            {/* <button submit="submit">Post</button>
            <button submit="submit">Edit</button> */}

            </form>
        </>
    )

}

export default PostWork;