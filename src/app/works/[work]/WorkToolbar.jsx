'use client';
import Link from "next/link";
import { useAuth } from "@/app/_util/authContext";
import styles from './WorkToolbar.module.css';

const WorkToolBar = (props)=>{
    const {user} = useAuth();
    const {multiC} = props;

    return(
        <ul className={styles.toolbar}>
            <button className={styles.toolbutton}>Entire work</button>
        {multiC ?
        <>
            <button className={styles.toolbutton}>Next chapter</button> 
        </>
         :""}

        {user.id  ? // only users can bookmark and edit 
        <>
            <button className={styles.toolbutton}>Bookmark</button>
            <button className={styles.toolbutton}>Edit</button>
        </>
        :''
        }

        </ul>

    )
}

export default WorkToolBar;
