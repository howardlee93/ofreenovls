'use client';
import Link from "next/link";
import { useAuth } from "@/app/_util/authContext";
import styles from './WorkToolbar.module.css';

const WorkToolBar = (props)=>{
    const {user} = useAuth();
    const {multiC} = props;
    const handleNextChapt = ()=>{
        props.setCurrChapter()
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
        </>
         :""}

        {user.id  ? // only users can bookmark and edit 
        <>
            <button className={styles.toolbutton}>Bookmark</button>
            <button className={styles.toolbutton}><Link href={`/works/${props.params}/edit`}>Edit </Link></button>
        </>
        :''
        }

        </ul>

    )
}

export default WorkToolBar;
