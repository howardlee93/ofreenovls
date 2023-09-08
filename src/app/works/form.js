'use client';
import Editor from "../_shared/editor/Editor";
import styles from './form.module.css';

const Form = (props)=>{
    const {handleSubmit, content, setContent, workInfo} = props;
    const subNames = workInfo?.subject.map(s => s.name) ||'';
    const tagNames = workInfo?.tag.map(t => t.name) ||'';

    return(
        <form onSubmit={handleSubmit} className={styles.newwork}>
            <div className={styles.tagCheckbox}>
                <label htmlFor="rating">Rating:</label>
                <select name="rating" id="rating"  defaultValue={workInfo?.rating}>
                    <option value='pg' >PG </option>
                    <option value='pg13'>PG-13</option>
                    <option value='m'>Mature</option>
                    <option value='e' >Explicit</option>
                </select>
            </div>

                <label htmlFor='warning'>Warning:</label>
                <div id={styles.radiobox}>
                    <label htmlFor='none'>Decline to warn</label>
                    <input type="radio" name="warning" value="none" defaultChecked={workInfo?.warning === 'none'}/> 
                    <label htmlFor='violence'>Violence</label>
                    <input type="radio" name="warning" value="violence" defaultChecked={workInfo?.warning === 'violence'}/> 
                    <label htmlFor='sex'>Sexual Content</label>
                    <input type="radio" name="warning" value="sex" defaultChecked={workInfo?.warning ==='sex'}/> 
                </div>

                <label htmlFor='subject'>Subjects:</label>
                <input type='text' name="subject" placeholder="subject" defaultValue={subNames}/>

                <label htmlFor='tags'>Tags:</label>
                <input type='text' name="tags" placeholder="tags" defaultValue={tagNames} />

                <label htmlFor='chapters'>Multi-chaptered?:</label>
                <input type='checkbox' name="chapters"/>

                <label htmlFor='title'>Title</label>
                <input type='text' name="title" placeholder="title" defaultValue={workInfo?.title ||''}/>
                
                <label htmlFor='summary'>Summary</label>
                <textarea name="summary" placeholder='summary' defaultValue={workInfo?.summary ||''}/>

                <label htmlFor="content"> Content</label>
                <Editor name="content" setContent={setContent} content={content||''}/>


            <button submit="submit">Preview</button>
            {/* <button submit="submit">Post</button>
            <button submit="submit">Edit</button> */}

            </form>
    )
}
export default Form;