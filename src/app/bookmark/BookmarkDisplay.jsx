'use client';
import Link from "next/link";
// import {useRouter} from 'next/navigation';

const BookmarkDisplay = props=>{
    const {bookmark} = props;
    const {work} = bookmark;
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
    }

    return(
        <>
        <h2><Link href={`/works/${work.id}`} >{work.title} </Link>by + {" "}
            <Link href={`/users/${work.authorId}`}>{work.author.name}</Link>
         </h2>
        
        <p>{work.rating}</p>
        <p>{work.warning}</p>
        <p>{work.subjects}</p>
        <p>{work.tags}</p>
        <p>{work.summary}</p>
        <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default BookmarkDisplay;