'use client';
import Link from "next/link";
import { useAuth } from "@/app/_util/authContext";
import styles from './WorkToolbar.module.css';
import {useState} from 'react';
import BookmarkAdd from '@/app/bookmark/BookmarkAdd';

const WorkToolBar = (props)=>{
    const {user} = useAuth();
    const {multiC} = props;
    const [selectedChptInd, setSelectedChptInd] = useState(props.currChapter)

    const handleChaptInd = (e)=>{
        e.preventDefault();
        console.log(typeof(e.target.value))
        setSelectedChptInd(e.target.value)
        props.setCurrChapter(parseInt(e.target.value))
    }

    return(
        <ul className={styles.toolbar}>
            <button className={styles.toolbutton} onClick={()=>props.setShowEntire(!props.showEntire)}>
            Entire work
            </button>
        {multiC ?
        <>
            <button className={styles.toolbutton} onClick={() => props.setCurrChapter(prev => --prev)}>Previous chapter</button> 
            <button className={styles.toolbutton} onClick={() => props.setCurrChapter(prev => ++prev)}>
                Next chapter
            </button> 

            <select name='chapt-index' value={selectedChptInd} onChange={handleChaptInd}>
                <option>--chapter index--</option>
                {props.chapters.map((chapter,i )=>
                    <option value={i} key={chapter.id}>{chapter.title? `${i+1} ${chapter.title}` : `${i+1}`}
                    </option>
                )}
            </select>

        </>
         :""}

        {user.id  ? // only users can bookmark and edit 
            <BookmarkAdd className={styles.toolbutton} workId={props.workId}/>
        :''
        }
        {user.id === props.authorId? 
        <button className={styles.toolbutton}><Link href={`/works/${props.params}/edit`}>Edit </Link></button>
        :""
        }

        </ul>

    )
}

export default WorkToolBar;
