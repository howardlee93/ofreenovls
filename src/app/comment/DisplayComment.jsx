import { useAuth } from "../_util/authContext";
import {useState} from 'react';

const DisplayComment = (props)=>{
    const {comment} = props;
    const {user} = useAuth();
    const [editmode, setEditMode] = useState(false);
    const [note, setNote] = useState(comment.note);

    const handleEdit =e=>{
        e.preventDefault();
        if (user.id === comment.user.id || user.id === props.authorId){
            console.log("permitted");
            const data={
                id:comment.id,
                note
            }
            const options={
                method:'PUT',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }
            fetch('/comment/',options)
            .then(res=> res.json())
            .then(resData => setNote(resData.note))
            .then(()=>setEditMode(false))
        }else{
            return;
        }
    }

    const handleDelete =e=>{
        e.preventDefault();
        if (user.id === comment.user.id || user.id === props.authorId){
            console.log("permitted")
            const options={
                method:'DELETE',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({id:comment.id})
            }
            fetch('/comment', options)
            // .then(()=> router.)
        }else{
            return;
        }
    }

    return(
        <div>
        <p>{comment.user.name}says:</p>
        {editmode ? 
        <div className='commentEdit'>
        <textarea value={note} onChange={e => setNote(e.target.value)}/>
        <button onClick={handleEdit}> update</button>
        </div>
        :<p>{note}</p>
        }
        <button onClick={()=>setEditMode(!editmode)} >Edit comment</button>
        <button onClick={handleDelete}>Delete comment</button>
        </div>
    )
}

export default DisplayComment;
