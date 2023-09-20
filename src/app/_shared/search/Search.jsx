'use client';
import { useRouter } from 'next/navigation';
import {useState} from 'react';

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
        <input type="text" value={searchTerm} onChange={e=> setSearchTerm(e.target.value)}
            onKeyDown={handleKeypress}
        />
    )
}

export default SearchComponent