'use client';
import Link from "next/link";
import {useRouter} from 'next/navigation';
import {warnings, ratings} from '@/app/_shared/constants';

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
        <h2><Link href={`/works/${work.id}`} >{work.title} </Link>by + {" "}
            <Link href={`/users/${work.authorId}`}>{work.author.name}</Link>
         </h2>
        
        <p>Rating: {ratings[work.rating]}</p>
        <p>Warning: {warnings[work.warning]}</p>
        <p>Subjects: {work.subjects}</p>
        <p>Tags:{work.tags}</p>
        <p>Summary: {work.summary}</p>
        <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default BookmarkDisplay;