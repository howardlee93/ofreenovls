import { useAuth } from "../_util/authContext";


const DisplayComment = (props)=>{
    const {comment} = props;
    const {user} = useAuth();

    const handleEdit =e=>{
        e.preventDefault();
        if (user.id === comment.user.id || user.id === props.authorId){
            console.log("permitted")
        }else{
            return;
        }
    }

    const handleDelete =e=>{
        e.preventDefault();
        if (user.id === comment.user.id || user.id === props.authorId){
            console.log("permitted")
        }else{
            return;
        }
    }

    return(
        <div>
        <p>{comment.user.name}says :{comment.note}</p>
        <button >Edit comment</button>
        <button>Delete comment</button>
        </div>
    )
}

export default DisplayComment;
