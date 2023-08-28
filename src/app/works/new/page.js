'use client';
import { useAuth } from "@/app/_util/authContext";
import {useState} from 'react';

const PostWork = ()=>{
    const {user} = useAuth();

    return(
        <>  
            <h1>New Work</h1>

            <div className='tag-checkbox'>
                <label for="rating">Rating:</label>
                <select name="rating" id="rating">
                    <option value='pg'>PG </option>
                    <option value='pg13'>PG-13</option>
                    <option value='m'>Mature</option>
                    <option value='e'>Explicit</option>
                </select>

                <br></br>

                <label for='warning'>Warning:</label>

                <label for='none'>Decline to warn</label>
                <input type="radio" name="none"/> 
                <br/>
                
                <input type='text' name="subject" placeholder="subject"/>
                <br/>

                <input type='text' name="tags" placeholder="tags"/>
                <br/>

                <label for='tags'>Multi-chaptered?:</label>
                <input type='checkbox' name="chapters"/>
                <br/>

                <textarea placeholder='summary'/>
                <br/>

                <textarea placeholder='content'/>
                <br/>

            </div>
        </>
    )

}

export default PostWork;