'use client';
import Link from "next/link";
import { useAuth } from "@/app/_util/authContext";
import styles from './WorkToolbar.module.css';

const WorkToolBar = (props)=>{
    const {user} = useAuth();
    const {multiC} = props;

    return(
        <ul className={styles.toolbar}>
            <button className={styles.toolbutton}><Link href={`/works/${props.params}/chapters`}>Entire work</Link></button>
        {multiC ?
        <>
            <button className={styles.toolbutton}>Previous chapter</button> 
            <button className={styles.toolbutton}>
            <Link href={`/works/${props.params}/chapters/${props.nextChapt.id}`}>
                Next chapter
            </Link>
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
