'use client';
import Link from "next/link";
import {useRouter} from 'next/navigation';
import {warnings, ratings} from '@/app/_shared/constants';
import WorkCard from '@/app/_shared/cards/WorkCard';

const BookmarkDisplay = props=>{
    const {bookmark} = props;
    const {work} = bookmark;
    const router = useRouter();
    const handleDelete= (e)=>{
        e.preventDefault();
        console.log(bookmark.id)
        const options={
            method:'DELETE',
            body:JSON.stringify({id:bookmark.id}),
            headers: {
                "Content-Type": "application/json",
              },
          
        }
        fetch('/bookmark/', options)
        .then(()=> router.refresh())
    }

    return(
        <>
        <WorkCard work={work}/>
        <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default BookmarkDisplay;