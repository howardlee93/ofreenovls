'use client';
import { useAuth } from "../_util/authContext";
import { useRouter } from 'next/navigation'

const BookmarkAdd = props=>{
    const {user} = useAuth();
    const {workId} = props;
    const router = useRouter();

    const handleClick= ()=>{
        const data ={
            userId: user.id,
            workId
        }
        console.log(data)
        const options ={
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        }
        fetch('/bookmark', options)
        .then(()=>router.replace(`/users/${user.id}`))
    }

    return (
        <>
        <button onClick={handleClick} className={props.className}> Bookmark</button>
        </>
    )
}

export default BookmarkAdd;