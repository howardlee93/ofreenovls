'use client';
import { useAuth } from "@/app/_util/authContext";
import Editor from './Editor';
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

                <label for='warning'>Warning</label>

                <label for='none'>Decline to warn</label>
                <input type="radio" name="none"/> 
                <br/>
                
                <label for='subject'>Subject:</label>
                <input type='text' name="subject" placeholder="subject"/>
                <br/>

                <label for='tags'>Tags:</label>
                <input type='text' name="tags" placeholder="tags"/>

            </div>
        </>
    )

}

export default PostWork;