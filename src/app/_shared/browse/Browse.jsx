'use client';
import {useState} from 'react';
import Link from 'next/link';
import styles from './Browse.module.css';

const Browse = props=>{

    const [showDrop, setShowDrop] = useState(false);
    
    return(
        <>
        <p onClick={()=>setShowDrop(!showDrop)}>Browse</p>
        {showDrop ?
        <div className={styles.drop}>
            <Link href={`/subjects`} replace className={styles.navLink}>Subject</Link>
            <Link href={`/tags`} replace className={styles.navLink}>Tags</Link>  
        </div>   
        :""}
        </>
    )
}

export default Browse;
