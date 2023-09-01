'use client';
import Editor from "../_shared/editor/Editor";
import styles from './form.module.css';
import {useState} from 'react';

const Form = ()=>{
    const [content, setContent] = useState('');
    const handleSubmit =e=>{
        e.preventDefault();
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <div className={styles.tagCheckbox}>
                <label htmlFor="rating">Rating:</label>
                <select name="rating" id="rating">
                    <option value='pg'>PG </option>
                    <option value='pg13'>PG-13</option>
                    <option value='m'>Mature</option>
                    <option value='e'>Explicit</option>
                </select>


                <label htmlFor='warning'>Warning:</label>
                <div id={styles.radiobox}>
                    <label htmlFor='none'>Decline to warn</label>
                    <input type="radio" name="none"/> 
                    <label htmlFor='none'>Violence</label>
                    <input type="radio" name="none"/> 
                    <label htmlFor='none'>Sex</label>
                    <input type="radio" name="none"/> 
                </div>

                
                <input type='text' name="subject" placeholder="subject"/>

                <input type='text' name="tags" placeholder="tags"/>

                <label htmlFor='tags'>Multi-chaptered?:</label>
                <input type='checkbox' name="chapters"/>

                <input type='text' name="title" placeholder="title"/>
                
                <textarea name="summary" placeholder='summary'/>

                <Editor setContent={setContent} content={content}/>


            </div>
            <button submit="submit">Preview</button>
            {/* <button submit="submit">Post</button>
            <button submit="submit">Edit</button> */}

            </form>
    )
}
export default Form;