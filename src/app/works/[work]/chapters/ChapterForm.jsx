'use client';
import Editor from "@/app/_shared/editor/Editor"
import styles from './ChapterForm.module.css';

const ChapterForm = props =>{
    const {workInfo, content, setContent, handleSubmit} = props;

    return(
        <form onSubmit={handleSubmit} className={styles.mainForm}>
                <label htmlFor='title'>Title</label>
                <input type='text' name="title" placeholder="title" defaultValue={workInfo?.title ||''}/>
                
                <label htmlFor='summary'>Summary</label>
                <textarea name="summary" placeholder='summary' defaultValue={workInfo?.summary ||''}/>


                <label htmlFor="content"> Content</label>
                <Editor name="content" setContent={setContent} content={content||''}/>
                <button type="submit">Submit</button>
        </form>
    )
}

export default ChapterForm;