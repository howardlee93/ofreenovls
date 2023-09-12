import { useAuth } from "../_util/authContext";
import {useState} from 'react';

const AddComment = (props)=>{

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

    }


    return(
        <div>
            <p>Comment as {user.name}</p>
            <textarea value={note} onChange={e=>setNote(e.target.value)}/>
            <button onClick={handleAddComment}>Comment</button>
        </div>
    )
}

export default AddComment;