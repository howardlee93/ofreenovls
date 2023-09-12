import { useAuth } from "../_util/authContext";

const AddComment = (props)=>{

    const {user} = useAuth();
    const {workId} = props;
    return(
        <div>
            <p>Comment as {user.name}</p>

        </div>
    )
}

export default AddComment;