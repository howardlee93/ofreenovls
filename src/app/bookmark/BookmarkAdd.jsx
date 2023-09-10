'use client';
import { useAuth } from "../_util/authContext";
import { useRouter } from "next/router";

const BookmarkAdd = props=>{
    const user = useAuth
    const {workId} = props;
    const router = useRouter();

    const handleClick= ()=>{
        const data ={
            userId: user.id,
            workId
        }
        const options ={
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        }
        // fetch('/bookmark', options)
        // .then(()=>router.replace(`/users/${user.id}`))
    }

    return (
        <>
        {user.id ?
        <button onClick={handleClick}> Bookmark</button>
        :""}
        </>
    )
}

export default BookmarkAdd;