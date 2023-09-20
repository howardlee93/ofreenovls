'use client';
import { useRouter } from 'next/navigation';
import {useState} from 'react';
import styles from './Search.module.css';

const SearchComponent =()=>{
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('')

    const handleKeypress = (e)=>{
        if (e.code === 'Enter'){
            //go to search res page 
            console.log(searchTerm)
            router.push(`/search?searchTerm=${searchTerm}`)
        }else{
            return;
        }
    }


    return(
        <input id={styles.search} type="text" value={searchTerm} onChange={e=> setSearchTerm(e.target.value)}
            onKeyDown={handleKeypress}
        />
    )
}

export default SearchComponent