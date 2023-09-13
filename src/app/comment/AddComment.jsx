import { useAuth } from "../_util/authContext";
import {useState} from 'react';
import { useRouter } from "next/navigation";
const AddComment = (props)=>{
    const router = useRouter();
    const {user} = useAuth();
    const {workId} = props;
    const [note, setNote] = useState('')

    const handleAddComment =(e)=>{
        e.preventDefault();
        const data ={
            userId: user.id,
            workId,
            note
        }

        const options = {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
        fetch('/comment/',options)
        .then(()=>router.refresh())
    }


    return(
        <div>
        {user.id ? 
            <div className='loggedIn'>
                <p>Comment as {user.name}</p>
                <textarea value={note} onChange={e=>setNote(e.target.value)}/>
                <button onClick={handleAddComment}>Comment</button>
            </div>
            :
            <p className='guest'>Please log in to comment</p>
        }
        </div>
    )
}

export default AddComment;